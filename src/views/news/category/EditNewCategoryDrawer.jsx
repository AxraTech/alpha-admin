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
import { ADD_CATEGORY, ADD_NEWS_CAT, EDIt_NEWS_CAT } from '@/graphql/mutations'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'

const EditNewCategoryDrawer = props => {
  const { setGlobalMsg } = useApp()
  // Props
  const { open, handleClose, newData, setData } = props
  const [editNewCategory] = useMutation(EDIt_NEWS_CAT)

  // States
  const [fileName, setFileName] = useState('')

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
      title: ''
    }
  })

  // Handle Form Submit
  const handleFormSubmit = async data => {
    const res = await editNewCategory({
      variables: {
        id: newData.id,
        title: data.title
        // image_url: fileName
      }
    })

    setData(prevData =>
      prevData.map(item => (item.id === newData?.id ? { ...item, ...res.data.update_news_categories_by_pk } : item))
    )
    handleReset()
    setGlobalMsg('✅ Category Data has been updated')
  }

  useEffect(() => {
    if (newData) {
      resetForm({
        title: newData.title
      })
    }
  }, [newData])

  // Handle Form Reset
  const handleReset = () => {
    handleClose()
    resetForm({ title: '' })
    setFileName('')
  }

  // Handle File Upload
  const handleFileUpload = event => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setFileName(files[0].name)
    }
  }

  return (
    <>
      <Drawer
        open={open}
        anchor='right'
        variant='temporary'
        onClose={handleReset}
        ModalProps={{ keepMounted: true }}
        sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
      >
        <div className='flex items-center justify-between pli-5 plb-4'>
          <Typography variant='h5'>Edit Category</Typography>
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
            {/* <div className='flex items-center gap-4'>
              <TextField
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
              />
              <Button component='label' variant='outlined' htmlFor='contained-button-file' className='min-is-fit'>
                Choose
                <input hidden id='contained-button-file' type='file' onChange={handleFileUpload} ref={fileInputRef} />
              </Button>
            </div> */}

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
      <Alert />
    </>
  )
}

export default EditNewCategoryDrawer
