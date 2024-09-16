'use client'
// React Imports
import { useRef, useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// Third-party Imports
import { useApp } from '@/app/ApolloWrapper'
import Alert from '@/components/helper/Alert'
import { ADD_DISCOUNT } from '@/graphql/mutations'
import { USER_ROLES } from '@/graphql/queries'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { FormHelperText } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { GET_ALL_PRODUCT_DISCOUNT } from '../../../graphql/queries'
const AddDiscountDrawer = props => {
  const { setGlobalMsg } = useApp()
  // Propss
  const { open, handleClose, discountData, loading, setLoading, setData } = props
  const [addDiscount] = useMutation(ADD_DISCOUNT, { refetchQueries: [GET_ALL_PRODUCT_DISCOUNT] })
  const [productId, setProductId] = useState()
  const [customerType, setCustomerType] = useState()
  const { data: userRoles } = useSuspenseQuery(USER_ROLES)
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
    defaultValues: {}
  })

  // Handle Form Submit
  const handleFormSubmit = async data => {
    try {
      setLoading(true)

      const res = await addDiscount({
        variables: {
          data: {
            min_order: Number(data.min_order),
            customer_type: customerType,
            discounted_value: Number(data.discounted_value),
            product_id: discountData?.id
          }
        }
      })
      console.log('res ', res)
      setLoading(false)
      // setData(res.data.insert_product_discounts_one)
      setData([...discountData, res.data.insert_product_discounts_one])
      handleReset()
      setGlobalMsg('➕ Added New Product Discount')
    } catch (e) {
      console.log('Error ', e)
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

    if (files && files.length !== 0) {
      setFileName(files)
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
          <Typography variant='h5'>Add Discount</Typography>
          <IconButton size='small' onClick={handleReset}>
            <i className='ri-close-line text-2xl' />
          </IconButton>
        </div>
        <Divider />
        <div className='p-5'>
          <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
            <Controller
              name='min_order'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type='number'
                  label='Minimal Order'
                  placeholder=''
                  {...(errors.min_order && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />

            <Controller
              name='discounted_value'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type='number'
                  label='Discounted Value'
                  placeholder=''
                  {...(errors.discounted_value && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />

            <FormControl fullWidth>
              <InputLabel>Select User Role</InputLabel>
              <Select
                label='Select Vendor'
                value={customerType}
                onChange={e => setCustomerType(e.target.value)}
                //     error={errors?.customer_id ? true : false}
                //     helperText={errors?.customer_id}
              >
                {userRoles?.user_roles?.map((brand, index) => (
                  <MenuItem value={brand?.role_name} key={index}>
                    {brand?.role_name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: 'red' }}>{errors?.role_name}</FormHelperText>
            </FormControl>
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
              <Button variant='contained' type='submit' loading={loading}>
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

export default AddDiscountDrawer
