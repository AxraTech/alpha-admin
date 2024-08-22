// React Imports
import { useRef, useState } from 'react'
import { Controller } from 'react-hook-form'
// MUI Imports
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import { useForm } from 'react-hook-form'

// Vars
const initialData = {
  from: 'shelbyComapny@email.com',
  to: 'qConsolidated@email.com',
  subject: 'Invoice of purchased Admin Templates',
  message: `Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`
}

const SendInvoiceDrawer = ({ open, handleClose }) => {
  // States
  const [formData, setFormData] = useState(initialData)

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
      title: '',
      description: ''
    }
  })

  // Handle Form Submit
  const handleFormSubmit = async data => {
    // const res = await addCategory({
    //   variables: {
    //     data: {
    //       title: data.title,
    //       image_url: fileName
    //     }
    //   }
    // })
    // setData([...categoryData, res.data.insert_product_categories_one])
    // handleReset()
    // setGlobalMsg('➕ Added New Category')
  }

  // Handle Form Reset
  // const handleReset = () => {
  //   handleClose()
  //   resetForm({ title: '', description: '' })
  //   setFileName('')
  // }

  // Handle File Upload
  const handleFileUpload = event => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setFileName(files[0].name)
    }
  }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   handleClose()
  //   setFormData(initialData)
  // }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      {/* <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Send Invoice</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit} className='flex flex-col items-start gap-5'>
          <TextField
            fullWidth
            label='From'
            variant='outlined'
            value={formData.from}
            onChange={e => setFormData({ ...formData, from: e.target.value })}
          />
          <TextField
            fullWidth
            label='To'
            variant='outlined'
            value={formData.to}
            onChange={e => setFormData({ ...formData, to: e.target.value })}
          />
          <TextField
            fullWidth
            label='Subject'
            variant='outlined'
            value={formData.subject}
            onChange={e => setFormData({ ...formData, subject: e.target.value })}
          />
          <TextField
            fullWidth
            label='Message'
            variant='outlined'
            multiline
            rows={10}
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          />
          <Chip
            size='small'
            color='primary'
            variant='tonal'
            className='rounded'
            label='Invoice Attached'
            icon={<i className='ri-attachment-line' />}
          />
          <div className='flex items-center gap-4'>
            <Button variant='contained' color='primary' type='submit'>
              Send
            </Button>
            <Button variant='outlined' color='secondary' type='reset' onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </div> */}

      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Send Invoice File</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />

      <div className='p-5'>
        <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
          {/* <Controller
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
          /> */}
          <div className='flex items-center gap-4'>
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
          </div>

          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Add
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

export default SendInvoiceDrawer
