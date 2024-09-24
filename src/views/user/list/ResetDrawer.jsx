'use client'
// React Imports
import { useState } from 'react'

// MUI Imports
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { InputAdornment } from '@mui/material'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { RESET_USER_PASSWORD } from '@/graphql/mutations'
import { useApp } from '@/app/ApolloWrapper'

// Vars
const initialData = {
  confirm_password: '',
  new_password: ''
}

const ResetDrawer = props => {
  // Props
  const { setGlobalMsg, loading, setLoading } = useApp()
  const { open, handleClose, userData, setData } = props
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD)

  // States
  const [formData, setFormData] = useState(initialData)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      new_password: '',
      confirm_password: ''
    }
  })

  const newPassword = watch('new_password') // Watch the password field to compare with confirm password

  const onSubmit = async data => {
    setLoading(true)
    try {
      const newUser = await resetUserPassword({
        variables: {
          user_id: userData.id,
          confirmNewPassword: data.confirm_password,
          newPassword: data.new_password
        }
      })
      setLoading(false)
      setGlobalMsg('✅ Reset User Password')
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
        <Typography variant='h5'>Reset User Password</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
          {/* New Password */}
          <Controller
            name='new_password'
            control={control}
            rules={{
              required: 'New password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters long' }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='New Password'
                type={showPassword ? 'text' : 'password'}
                error={Boolean(errors.new_password)}
                helperText={errors.new_password ? errors.new_password.message : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => setShowPassword(!showPassword)}
                        edge='end'
                      >
                        {showPassword ? (
                          <i className='ri-eye-fill text-[22px] text-textSecondary' />
                        ) : (
                          <i className=' ri-eye-off-fill text-[22px] text-textSecondary' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            )}
          />

          {/* Confirm Password */}
          <Controller
            name='confirm_password'
            control={control}
            rules={{
              required: 'Confirm password is required',
              validate: value => value === newPassword || 'Passwords do not match',
              minLength: { value: 6, message: 'Password must be at least 6 characters long' }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Confirm Password'
                type={showConfirmPassword ? 'text' : 'password'}
                error={Boolean(errors.confirm_password)}
                helperText={errors.confirm_password ? errors.confirm_password.message : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge='end'
                      >
                        {showConfirmPassword ? (
                          <i className='ri-eye-fill text-[22px] text-textSecondary' />
                        ) : (
                          <i className=' ri-eye-off-fill text-[22px] text-textSecondary' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            )}
          />

          <div className='flex items-center gap-4'>
            <LoadingButton variant='contained' type='submit' loading={loading}>
              Submit
            </LoadingButton>
            <Button variant='outlined' color='error' type='reset' onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default ResetDrawer
