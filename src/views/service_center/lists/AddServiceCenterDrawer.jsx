// React Imports
import { useState, useRef } from 'react'

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
import { useMutation, useQuery, useSuspenseQuery } from '@apollo/client'
import { ADD_ADMIN, ADD_CATEGORY, ADD_DEALERS, ADD_SERVICE_CENTER } from '@/graphql/mutations'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { ADMIN_ROLES, GET_USERS } from '@/graphql/queries'

const AddServiceCenterDrawer = props => {
  const { setGlobalMsg } = useApp()
  // Props
  const { open, handleClose, serviceCenterData, setData } = props
  const [userId, setUserId] = useState()
  const [addService] = useMutation(ADD_SERVICE_CENTER)
  const { data: adminRoles } = useSuspenseQuery(ADMIN_ROLES)
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
      name: '',
      phone: '',
      address: ''
    }
  })

  // Handle Form Submit
  const handleFormSubmit = async data => {
    const res = await addService({
      variables: {
        data: {
          address: data.address,
          name: data.name,
          phone: data.phone
        }
      }
    })

    setData([...(serviceCenterData ?? []), res.data.insert_service_centers_one])
    handleReset()
    setGlobalMsg('➕ Added New Data')
  }

  // Handle Form Reset
  const handleReset = () => {
    handleClose()
    resetForm({ title: '', description: '' })
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
          <Typography variant='h5'>Add Admin</Typography>
          <IconButton size='small' onClick={handleReset}>
            <i className='ri-close-line text-2xl' />
          </IconButton>
        </div>
        <Divider />
        <div className='p-5'>
          <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
            {/* name */}
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Name'
                  placeholder=''
                  {...(errors.name && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />

            {/* phone */}
            <Controller
              name='phone'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Phone'
                  type='phone'
                  placeholder=''
                  {...(errors.phone && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />

            {/* address */}
            <Controller
              name='address'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Address'
                  placeholder=''
                  {...(errors.address && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />

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
      <Alert />
    </>
  )
}

export default AddServiceCenterDrawer
