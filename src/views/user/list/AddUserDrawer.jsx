'use client'
// React Imports
import { useState } from 'react'

// MUI Imports
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Alert from '@/components/helper/Alert'
// Third-party Imports
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '@/graphql/mutations'
import { useApp } from '@/app/ApolloWrapper'

// Vars
const initialData = {
  company: '',
  country: '',
  contact: ''
}

const AddUserDrawer = props => {
  // Props
  const { setGlobalMsg, loading, setLoading } = useApp()
  const { open, handleClose, userData, setData } = props
  const [addUser] = useMutation(ADD_USER)
  // States
  const [formData, setFormData] = useState(initialData)

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
      role: '',
      password: ''
    }
  })

  const onSubmit = async data => {
    setLoading(true)
    try {
      const newUser = await addUser({
        variables: {
          name: data.name,
          phone: data.phone,
          role: data.role,
          password: data.password
        }
      })
      setLoading(false)
      setGlobalMsg('✅ Added New User')
      setData([...(userData ?? []), newUser])
      handleClose()
      setFormData(initialData)
      resetForm({})
    } catch (e) {
      setGlobalMsg(`❌  ${e.message}`)
    }
  }

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
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Add New User</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-5'>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Name'
                placeholder='Enter Name'
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
                placeholder='Enter Phone'
                {...(errors.phone && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          {/* password */}
          <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type='password'
                label='Password'
                placeholder='Enter Password'
                {...(errors.password && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          {/* role */}
          <FormControl fullWidth>
            <InputLabel id='country' error={Boolean(errors.role)}>
              Select Role
            </InputLabel>
            <Controller
              name='role'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select label='Select Role' {...field} error={Boolean(errors.role)}>
                  <MenuItem value='dealer'>Dealer</MenuItem>
                  <MenuItem value='consumer'>Consumer</MenuItem>
                </Select>
              )}
            />
            {errors.role && <FormHelperText error>This field is required.</FormHelperText>}
          </FormControl>

          <div className='flex items-center gap-4'>
            <LoadingButton variant='contained' type='submit' loading={loading}>
              Submit
            </LoadingButton>
            <Button variant='outlined' color='error' type='reset' onClick={() => handleReset()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <Alert />
    </Drawer>
  )
}

export default AddUserDrawer
