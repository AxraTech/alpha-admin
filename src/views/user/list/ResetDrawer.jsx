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
import { ADD_USER, RESET_USER_PASSWORD } from '@/graphql/mutations'
import { useApp } from '@/app/ApolloWrapper'
import { InputAdornment } from '@mui/material'

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
    formState: { errors }
  } = useForm({
    defaultValues: {
      new_password: '',
      confirm_password: ''
    }
  })

  const onSubmit = async data => {
    setLoading(true)
    try {
      console.log('data ', data)

      const newUser = await resetUserPassword({
        variables: {
          user_id: userData.id,
          confirmNewPassword: data.confirm_password,
          newPassword: data.new_password
        }
      })
      setLoading(false)
      setGlobalMsg('✅ Reset User Password')
      // setData([...(userData ?? []), newUser])
      handleClose()
      setFormData(initialData)
      resetForm({})
    } catch (e) {
      setGlobalMsg(`❌  ${e.message}`)
    }
  }

  const handleConfirmShowPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
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
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-5'>
          {/*new password */}
          <Controller
            name='new_password'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='new_password'
                type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                placeholder=''
                error={Boolean(errors.new_password)}
                helperText={errors.new_password ? 'This field is required.' : ''}
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
          {/* confirm password */}
          <Controller
            name='confirm_password'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='confirm_password'
                type={showConfirmPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                placeholder=''
                error={Boolean(errors.confirm_password)}
                helperText={errors.confirm_password ? 'This field is required.' : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleConfirmShowPassword}
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

export default ResetDrawer
