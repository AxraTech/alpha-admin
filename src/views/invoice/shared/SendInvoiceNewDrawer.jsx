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
import { useMutation } from '@apollo/client'
import { IMGAE_UPLOAD, SEND_INVOICE_FILE, SEND_QUOTATION_FILE } from '@/graphql/mutations'
import { uploadFile } from '@/utils/helper'
import { useApp } from '@/app/ApolloWrapper'
import { InputAdornment } from '@mui/material'
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

const SendQuotationDrawer = ({ open, handleClose, invoiceData }) => {
  const [file, setFile] = useState()
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)
  const [sendInvoice] = useMutation(SEND_INVOICE_FILE)
  const { setGlobalMsg } = useApp()
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
    try {
      const fileUploadUrl = await getFileUploadUrl({
        variables: {
          content_type: 'pdf',
          folder: 'invoices'
        }
      })

      const uploadedFileUrl = await uploadFile(file[0], fileUploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image')
      const res = await sendInvoice({
        variables: { id: invoiceData.id, invoice_file_url: uploadedFileUrl }
      })
      setFile('')
      setGlobalMsg('➕ Send Invoice file suceessful')
    } catch (e) {
      setGlobalMsg('❌ Send file error')
    }
  }

  // Handle File Upload
  const handleFileUpload = event => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setFile(files)
    }
  }

  const handleReset = () => {
    setFile('')
    handleClose()
    // setFormData(initialData)
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
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Send Invoice File</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      {console.log('file ', file ? file[0].name : 'null')}
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
          <div className='flex items-center gap-4'>
            <TextField
              size='small'
              placeholder='No file chosen'
              variant='outlined'
              value={file ? file[0].name : ''}
              className='flex-auto'
              InputProps={{
                readOnly: true,
                endAdornment: file ? (
                  <InputAdornment position='end'>
                    <IconButton size='small' edge='end' onClick={() => setFile('')}>
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

export default SendQuotationDrawer
