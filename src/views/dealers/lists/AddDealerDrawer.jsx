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
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { ADD_CATEGORY, ADD_DEALERS } from '@/graphql/mutations'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { GET_USERS } from '@/graphql/queries'

const AddCategoryDrawer = props => {
  const { setGlobalMsg } = useApp()
  // Props
  const { open, handleClose, dealerData, setData } = props
  const [userId, setUserId] = useState()
  const { data: users } = useSuspenseQuery(GET_USERS)
  const [addDealer] = useMutation(ADD_DEALERS)

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
    const res = await addDealer({
      variables: {
        data: {
          phone: data.phone,
          name: data.name,
          address: data.address,
          city_name: data.city_name,
          township_name: data.township_name,
          user_id: userId
        }
      }
    })

    setData([...dealerData, res.data.insert_dealers_one])
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
          <Typography variant='h5'>Add Dealer</Typography>
          <IconButton size='small' onClick={handleReset}>
            <i className='ri-close-line text-2xl' />
          </IconButton>
        </div>
        <Divider />
        <div className='p-5'>
          <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
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
                  multiline
                  {...field}
                  fullWidth
                  label='Address'
                  placeholder=''
                  {...(errors.address && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            <Controller
              name='city_name'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='City Name'
                  placeholder=''
                  {...(errors.city_name && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            {/* township name */}
            <Controller
              name='township_name'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Township Name'
                  placeholder=''
                  {...(errors.township_name && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />

            {/* user */}
            <FormControl fullWidth>
              <InputLabel>Select User</InputLabel>
              <Select
                label='Select Vendor'
                value={userId}
                onChange={e => setUserId(e.target.value)}
                // error={errors?.brandId ? true : false}
                // helperText={errors?.brandId}
              >
                {users?.users?.map((user, index) => (
                  <MenuItem value={user?.id} key={index}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
              {/* <FormHelperText sx={{ color: 'red' }}>{errors?.user_id}</FormHelperText> */}
            </FormControl>

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

export default AddCategoryDrawer
