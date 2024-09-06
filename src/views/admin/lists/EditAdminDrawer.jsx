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
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { EDIT_ADMIN } from '@/graphql/mutations'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { ADMIN_ROLES } from '@/graphql/queries'

const EditAdminDrawer = props => {
  const { setGlobalMsg } = useApp()
  // Props
  const { open, handleClose, adminData, setData } = props

  const [editAdmin] = useMutation(EDIT_ADMIN)
  const { data: adminRoles } = useSuspenseQuery(ADMIN_ROLES)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      role: ''
    }
  })

  // Handle Form Submit
  const handleFormSubmit = async data => {
    const res = await editAdmin({
      variables: {
        id: adminData.id,
        data: {
          email: data.email,
          name: data.name,
          role: data.role
        }
      }
    })

    setData(prevData =>
      prevData.map(item => (item.id === adminData?.id ? { ...item, ...res.data.update_admins_by_pk } : item))
    )
    handleReset()
    setGlobalMsg('✅ Staff Data has been updated')
  }

  useEffect(() => {
    if (adminData) {
      resetForm({
        name: adminData.name,
        email: adminData.email,
        role: adminData.role
      })
    }
  }, [adminData, resetForm])
  // Handle Form Reset
  const handleReset = () => {
    handleClose()
    resetForm({ title: '', description: '' })
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
          <Typography variant='h5'>Edit Staff</Typography>
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
            {/* email */}
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Email'
                  type='email'
                  placeholder=''
                  {...(errors.email && { error: true, helperText: 'This field is required.' })}
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
                    <MenuItem value='sale'>Sale</MenuItem>
                    <MenuItem value='finance'>Finance</MenuItem>
                    <MenuItem value='service'>Service</MenuItem>
                    <MenuItem value='delivery'>Delivery</MenuItem>
                    <MenuItem value='admin'>Admin</MenuItem>
                    <MenuItem value='manager'>Manager</MenuItem>
                  </Select>
                )}
              />
              {errors.role && <FormHelperText error>This field is required.</FormHelperText>}
            </FormControl>
            {/* password */}
            {/* <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Password'
                  type='password'
                  placeholder=''
                  {...(errors.password && { error: true, helperText: 'This field is required.' })}
                />
              )}
            /> */}

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

export default EditAdminDrawer
