'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// Third-party Imports
import { useDropzone } from 'react-dropzone'

// Component Imports
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
import AppReactDropzone from '@/libs/styles/AppReactDropzone'
import { useMutation } from '@apollo/client'
import { DELETE_PRODUCT_IMAGE, IMGAE_UPLOAD, PRODUCT_IMAGE_UPLOAD } from '@/graphql/mutations'
import { uploadFile } from '@/utils/helper'
import { useApp } from '@/app/ApolloWrapper'
import Alert from '@/components/helper/Alert'
// Styled Dropzone Component
const Dropzone = styled(AppReactDropzone)(({ theme }) => ({
  '& .dropzone': {
    minHeight: 'unset',
    padding: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      paddingInline: theme.spacing(5)
    },
    '&+.MuiList-root .MuiListItem-root .file-name': {
      fontWeight: theme.typography.body1.fontWeight
    }
  }
}))

const ProductImage = ({ files, setFiles, productData }) => {
  // States

  const [productMedia, setProductMedia] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [isImageChange, setIsImageChange] = useState(false)
  const [deleteImage] = useMutation(DELETE_PRODUCT_IMAGE, { fetchPolicy: 'network-only' })
  const [imageUpload] = useMutation(PRODUCT_IMAGE_UPLOAD, { fetchPolicy: 'network-only' })
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)
  const { setGlobalMsg } = useApp()
  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setIsImageChange(true)
      const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image'))

      if (imageFiles.length !== acceptedFiles.length) {
        setErrorMessage('Only image files are allowed.')
      } else {
        setErrorMessage('') // Clear error if only images are dropped
      }
      setFiles(prevFiles => [
        ...prevFiles,
        ...acceptedFiles?.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
      ])
    }

    // setFiles(acceptedFiles.map(file => Object.assign(file)))
  })

  useEffect(() => {
    if (productData?.product_medias) {
      const initialFiles = productData?.product_medias?.map(image => ({
        media_url: image?.media_url,
        id: image?.id,
        type: 'image',
        name: 'image'
      }))

      setFiles(initialFiles)
    }
  }, [productData])

  const renderFilePreview = file => {
    if (file?.media_url) {
      return <img width={38} height={38} alt={file?.name} src={file.media_url} />
    }
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
    } else {
      return <i className='ri-file-text-line' />
    }
  }

  const handleImageUpdate = async () => {
    try {
      if (isImageChange) {
        const newFiles = files?.filter(file => !file.id)
        newFiles?.map(async file => {
          const fileUploadUrl = await getFileUploadUrl({
            variables: {
              content_type: 'image',
              folder: 'products'
            }
          })
          const uploadedFileUrl = await uploadFile(file, fileUploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image')
          await imageUpload({
            variables: {
              data: {
                product_id: productData?.id,
                media_type: 'image',
                media_url: uploadedFileUrl
              }
            }
          })
        })
      }
      setGlobalMsg('✅ Image Uploaded')
    } catch (e) {
      setGlobalMsg(`❌ Image Upload Error`, e)
      console.log('Image Upload error ', e)
    }
  }
  const handleRemoveFile = async file => {
    if (!isImageChange) {
      !isImageChange && (await deleteImage({ variables: { id: file?.id } }))
      const uploadedFiles = files
      const filtered = uploadedFiles.filter(i => i.id !== file.id)
      setFiles([...filtered])
    } else {
      const uploadedFiles = files
      const filtered = uploadedFiles.filter(i => i.name !== file.name)
      setFiles([...filtered])
    }
  }

  const fileList = files?.map(file => (
    <ListItem key={file?.id} className='pis-4 plb-3'>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <i className='ri-close-line text-xl' />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  const handleMultiFileChange = e => {
    const files = e.target.files
    const urls = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const url = URL.createObjectURL(file)
      urls.push({ file: url, type: file.type.split('/')[0] })
    }
    setProductMedia(urls)
  }

  return (
    <>
      <Dropzone>
        <Card>
          <CardHeader title='Product Image' sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }} />
          <CardContent>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <div className='flex items-center flex-col gap-2 text-center'>
                <CustomAvatar variant='rounded' skin='light' color='secondary'>
                  <i className='ri-upload-2-line' />
                </CustomAvatar>
                <Typography variant='h4'>Drag and Drop Your Image Here.</Typography>
                <Typography color='text.disabled'>or</Typography>
                <Button variant='outlined' size='small'>
                  Browse Image
                </Button>
              </div>
            </div>
            {errorMessage && (
              <Typography color='error' variant='body2'>
                {errorMessage}
              </Typography>
            )}
            {files?.length ? (
              <>
                <List>{fileList}</List>
                <div className='buttons'>
                  <Button color='primary' variant='contained' onClick={handleImageUpdate}>
                    Image Update
                  </Button>
                  {/* <Button variant='contained'>Upload Files</Button> */}
                </div>
              </>
            ) : null}
          </CardContent>
        </Card>
      </Dropzone>
      <Alert />
    </>
  )
}

export default ProductImage
