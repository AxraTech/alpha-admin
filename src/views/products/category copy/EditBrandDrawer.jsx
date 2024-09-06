'use client'

// React Imports
import { useState, useRef, useEffect } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@apollo/client'

import { useApp } from '@/app/ApolloWrapper'
import { uploadFile } from '@/utils/helper'
import { EDIT_BRAND, IMGAE_UPLOAD } from '../../../graphql/mutations'
const editBrandDrawer = props => {
  const { setGlobalMsg } = useApp()
  // Props
  const { open, handleClose, brandData, setData, loading, setLoading } = props
  const [editBrand] = useMutation(EDIT_BRAND)
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)

  // States
  const [fileName, setFileName] = useState('')
  const [filePreview, setFilePreview] = useState()
  // Refs
  const fileInputRef = useRef(null)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: '',
      image_url: ''
    }
  })

  // Handle Form Submit
  const handleFormSubmit = async data => {
    try {
      setLoading(true)
      let uploadedFileUrl = brandData.image_url
      if (fileName && fileName !== brandData?.image_url) {
        const uploadData = await getFileUploadUrl({ variables: { content_type: 'image', folder: 'products' } })
        uploadedFileUrl = await uploadFile(fileName, uploadData.data.getFileUploadUrl.fileUploadUrl, 'image')
      }

      const res = await editBrand({
        variables: {
          id: brandData.id,
          data: {
            title: data.title,
            image_url: uploadedFileUrl
          }
        }
      })

      setData(prevData =>
        prevData.map(item => (item.id === brandData?.id ? { ...item, ...res.data.update_brands_by_pk } : item))
      )
      setGlobalMsg('✅ Brand Data has been updated')
      handleReset()
    } catch (e) {
      setGlobalMsg('❌ Add Brand Error')
      console.log('Add Error ', e)
    }
  }

  // Handle Form Reset
  const handleReset = () => {
    handleClose()
    resetForm({ title: '', description: '' })
    setFileName('')
  }

  // Handle File Upload
  const handleFileUpload = event => {
    const { files } = event.target
    if (files && files.length > 0) {
      const selectedFile = files[0]
      setFileName(selectedFile)
      setFilePreview(URL.createObjectURL(selectedFile))
    }
  }

  useEffect(() => {
    if (brandData) {
      setFilePreview(brandData?.image_url)
      resetForm({
        title: brandData.title
      })
      setFileName(brandData.image_url)
    }
  }, [brandData, resetForm])

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Edit Brand</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
          <Controller
            name='title'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Title'
                placeholder=''
                {...(errors.title && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <div className='flex items-center gap-4'>
            {/* <TextField
              size='small'
              placeholder='No file chosen'
              variant='outlined'
              value={fileName}
              className='flex-auto'
              InputProps={{
                readOnly: true,
                endAdornment: fileName ? (
                  <InputAdornment position='end'>
                    <IconButton size='small' edge='end' onClick={() => setFileName('')}>
                      <i className='ri-close-line' />
                    </IconButton>
                  </InputAdornment>
                ) : null
              }}
            /> */}
            <input
              type='file'
              id='contained-button-file'
              // style={{ display: 'none' }}
              onChange={handleFileUpload}
              ref={fileInputRef}
            />
            {/* <label htmlFor='contained-button-file'>
              <Button variant='outlined' component='span' className='min-is-fit'>
                Choose
              </Button>
            </label> */}

            {/* <Button component='label' variant='outlined' htmlFor='contained-button-file' className='min-is-fit'>
              Choose
              <input id='contained-button-file' type='file' onChange={handleFileUpload} ref={fileInputRef} />
            </Button> */}
          </div>
          {filePreview && (
            <div className='mt-4'>
              <img src={filePreview} alt='Preview' style={{ width: '100%', borderRadius: '4px' }} />
            </div>
          )}

          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Update
            </Button>
            <Button variant='outlined' color='error' type='reset' onClick={handleReset}>
              Discard
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default editBrandDrawer
