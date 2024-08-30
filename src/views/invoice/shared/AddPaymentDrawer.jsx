'use client'
// React Imports
import { useState } from 'react'

// MUI Import
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

// Styled Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import { useMutation } from '@apollo/client'
import { ADD_PARYMENT } from '@/graphql/mutations'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
// Vars
const initialData = {
  paymentDate: new Date(),
  paymentMethod: 'select-method',
  paymentAmount: 500,
  paymentNote: ''
}

const AddPaymentDrawer = ({ open, handleClose, invoiceData, paymentMethods }) => {
  // States
  const { setGlobalMsg } = useApp()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState(initialData)
  const [addPayments] = useMutation(ADD_PARYMENT)
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await addPayments({
        variables: {
          amount: formData.amount,
          invoice_id: invoiceData.id,
          payment_date: formData.payment_date,
          payment_method: formData.payment_method
        }
      })
      setLoading(false)
      setGlobalMsg('✅ Payment Send Successful')
      setFormData('')
      handleClose()
    } catch (e) {
      console.log('Error ', e)
    }
  }

  const handleReset = () => {
    handleClose()
    setFormData(initialData)
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
          <Typography variant='h5'>Add Payment</Typography>
          <IconButton size='small' onClick={handleReset}>
            <i className='ri-close-line text-2xl' />
          </IconButton>
        </div>
        <Divider />
        <div className='p-5'>
          <Typography className='flex justify-end text-red-600'>
            Balance : {invoiceData.balance ? invoiceData.balance.toLocaleString() : 0}
          </Typography>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5'>
            {/* <TextField
            fullWidth
            id='invoice-balance'
            label='Invoice Balance'
            InputProps={{ disabled: true }}
            defaultValue='5000.00'
          /> */}
            <TextField
              fullWidth
              id='amount'
              label='Payment Amount'
              type='number'
              InputProps={{
                startAdornment: <InputAdornment position='start'></InputAdornment>
              }}
              value={formData.amount}
              onChange={e => setFormData({ ...formData, amount: +e.target.value })}
            />
            <AppReactDatepicker
              selected={formData.payment_date}
              id='payment-date'
              onChange={date => date !== null && setFormData({ ...formData, payment_date: date })}
              customInput={<TextField fullWidth label='Payment Date' />}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='payment-method'>Payment Method</InputLabel>
              <Select
                label='Payment Method'
                labelId='payment-method'
                id='payment-method-select'
                value={formData.payment_method}
                onChange={e => setFormData({ ...formData, payment_method: e.target.value })}
              >
                <MenuItem value='select-method' disabled>
                  Select Payment Method
                </MenuItem>
                {paymentMethods.payment_methods.map(method => (
                  <MenuItem value={method.name} key={method.id}>
                    {method.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <FormControl fullWidth>
            <InputLabel htmlFor='payment-method'>Payment Status</InputLabel>
            <Select
              label='Payment Method'
              labelId='payment-method'
              id='payment-method-select'
              value={formData.status}
              onChange={e => setFormData({ ...formData, status: e.target.value })}
            >
              <MenuItem value='select-method' disabled>
                Select Payment Method
              </MenuItem>
              <MenuItem value='cash'>Cash</MenuItem>
              <MenuItem value='bank-transfer'>Bank Transfer</MenuItem>
              <MenuItem value='credit'>Credit</MenuItem>
              <MenuItem value='debit'>Debit</MenuItem>
              <MenuItem value='paypal'>Paypal</MenuItem>
            </Select>
          </FormControl> */}
            {/* <TextField
            rows={6}
            multiline
            fullWidth
            label='Internal Payment Note'
            placeholder='Internal Payment Note'
            value={formData.paymentNote}
            onChange={e => setFormData({ ...formData, paymentNote: e.target.value })}
          /> */}
            <div className='flex items-center gap-4'>
              <Button loading={loading} size='large' variant='contained' type='submit'>
                Send
              </Button>
              <Button size='large' variant='outlined' color='secondary' type='reset' onClick={handleReset}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Drawer>
      <Alert />
    </>
  )
}

export default AddPaymentDrawer
