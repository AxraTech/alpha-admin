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
import { IMGAE_UPLOAD } from '@/graphql/mutations'

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

const NewImage = ({ files, setFiles, newData }) => {
  // States

  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)))
    }
  })

  useEffect(() => {
    if (newData) {
      setFiles(newData.image_url)
    }
  }, [newData])

  const renderFilePreview = file => {
    if (file?.type?.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
    } else {
      return <img width={38} height={38} alt={file.name} src={files} />
      // return <i className='ri-file-text-line' />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }
  const fileList = () => {
    /* // const fileList = files.map(file => ( ; */
    ;<ListItem className='pis-4 plb-3'>
      <div className='file-details'>
        {/* <div className='file-preview'>{renderFilePreview(files)}</div> */}
        <div className='file-preview'>
          <img width={38} height={38} alt='image' src={files} />
        </div>
        <div>
          <Typography className='file-name font-medium' color='text.primary'>
            {files?.name}
          </Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(files?.size / 100) / 10 > 1000
              ? `${(Math.round(files?.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(files?.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(files)}>
        <i className='ri-close-line text-xl' />
      </IconButton>
    </ListItem>
  }

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  return (
    <Dropzone>
      <Card>
        <CardHeader
          title='Product Image'
          action={
            <Typography component={Link} color='primary' className='font-medium'>
              Add media from URL
            </Typography>
          }
          sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
        />
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

          {files.length ? (
            <>
              <List>
                <ListItem className='pis-4 plb-3'>
                  <div className='file-details'>
                    {/* <div className='file-preview'>{renderFilePreview(files)}</div> */}
                    <div className='file-preview'>
                      <img width={38} height={38} alt='image' src={files} />
                    </div>
                    <div>
                      <Typography className='file-name font-medium' color='text.primary'>
                        {files?.name}
                      </Typography>
                      <Typography className='file-size' variant='body2'>
                        {Math.round(files?.size / 100) / 10 > 1000
                          ? `${(Math.round(files?.size / 100) / 10000).toFixed(1)} mb`
                          : `${(Math.round(files?.size / 100) / 10).toFixed(1)} kb`}
                      </Typography>
                    </div>
                  </div>
                  <IconButton onClick={() => handleRemoveFile(files)}>
                    <i className='ri-close-line text-xl' />
                  </IconButton>
                </ListItem>
              </List>
              <div className='buttons'>
                <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                  Remove All
                </Button>
                {/* <Button variant='contained'>Upload Files</Button> */}
              </div>
            </>
          ) : null}
        </CardContent>
      </Card>
    </Dropzone>
  )
}

export default NewImage
