// React Imports
import { useState } from 'react'

// MUI Imports
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
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { ADD_USER, IS_WARRANTY_VALID } from '@/graphql/mutations'
import { FormLabel } from '@mui/material'
import { SERVICE_TOKEN_BY_ID } from '@/graphql/queries'

// Vars
const initialData = {
  company: '',
  country: '',
  contact: ''
}

const EditSeriveDrawer = props => {
  // Props
  const { open, handleClose, serviceData, serivceStatus } = props
  const [editService] = useMutation(IS_WARRANTY_VALID)
  // States
  const [formData, setFormData] = useState(initialData)
  const [value, setValue] = useState(true)
  const [status, setStatus] = useState()
  const handleChange = event => {
    setValue(event.target.value)
  }

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {}
  })

  const onSubmit = async data => {
    const newUser = await editService({
      variables: {
        id: serviceData.id,
        data: {
          service_fee: data.service_fee,
          status: data.status,
          is_warranty_valid: data.is_warranty_valid
        }
      },
      refetchQueries: [SERVICE_TOKEN_BY_ID]
    })

    // setData([...(serviceData ?? []), newUser])
    // setData(prevData =>
    //   prevData.map(item => (item.id === serviceData?.id ? { ...item, ...res.data.update_service_tokens_by_pk } : item))
    // )
    handleClose()
    setFormData(initialData)
    resetForm({})
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
        <Typography variant='h5'>Edit Service Data</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-5'>
          {/* Warranty Validity */}
          {/* <FormControl>
            <FormLabel id='demo-controlled-radio-buttons-group'>Is Warranty Valid</FormLabel>
            <RadioGroup
              aria-labelledby='demo-controlled-radio-buttons-group'
              name='controlled-radio-buttons-group'
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value='true' control={<Radio />} label='Yes' />
              <FormControlLabel value='false' control={<Radio />} label='No' />
            </RadioGroup>
          </FormControl> */}
          <FormControl component='fieldset'>
            <Typography component='legend'>Is Warranty Validity</Typography>
            <Controller
              name='is_warranty_valid'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel value='true' control={<Radio />} label='Yes' />
                  <FormControlLabel value='false' control={<Radio />} label='No' />
                </RadioGroup>
              )}
            />
            {errors.is_warranty_valid && <FormHelperText error>This field is required.</FormHelperText>}
          </FormControl>

          <Controller
            name='service_fee'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Service Fee'
                placeholder='Enter Service Fee'
                {...(errors.service_fee && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />

          {/* Service Status */}
          <FormControl fullWidth>
            <InputLabel id='country' error={Boolean(errors.status)}>
              Select Service Status
            </InputLabel>
            <Controller
              name='status'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select label='Select Service Status' {...field} error={Boolean(errors.status)}>
                  {serivceStatus.service_status.map(status => (
                    <MenuItem key={status.name} value={status.name}>
                      {status.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.status && <FormHelperText error>This field is required.</FormHelperText>}
          </FormControl>

          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
            <Button variant='outlined' color='error' type='reset' onClick={() => handleReset()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default EditSeriveDrawer
