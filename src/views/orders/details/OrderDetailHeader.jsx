'use client'
// MUI Imports
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
// import { useParams } from 'next/navigation'
import { useMutation, useQuery, useSuspenseQuery } from '@apollo/client'
import { ORDERS_BY_ID } from '@/graphql/queries'
import { CHANGE_ORDER_STATUS, DELETE_ORDERS } from '@/graphql/mutations'
import { useRef, useState } from 'react'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField
} from '@mui/material'
import { IMGAE_UPLOAD, ORDER_COMPLETE } from '../../../graphql/mutations'
import { uploadFile } from '@/utils/helper'

export const paymentStatus = {
  1: { text: 'Paid', color: 'success' },
  2: { text: 'Pending', color: 'warning' },
  3: { text: 'Cancelled', color: 'secondary' },
  4: { text: 'Failed', color: 'error' }
}
export const statusChipColor = {
  completed: 'success',
  canceled: 'error',
  refunded: 'warning',
  delivering: 'primary',
  preparing: 'info',
  ordered: 'secondary'
}

const OrderDetailHeader = ({ orderData }) => {
  const { setGlobalMsg } = useApp()
  const [completeOpen, setCompleteOpen] = useState(false)
  const [deleteOrder] = useMutation(DELETE_ORDERS)
  const [changeOrderStatus] = useMutation(CHANGE_ORDER_STATUS, { refetchQueries: [ORDERS_BY_ID] })
  const [completeOrder] = useMutation(ORDER_COMPLETE)
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)
  const [fileName, setFileName] = useState()
  const fileInputRef = useRef(null)
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  const handleChangeOrderStatus = async (id, status) => {
    try {
      const result = await changeOrderStatus({
        variables: {
          order_id: id,
          status: status
        }
      })

      setGlobalMsg('Change Order Status')
    } catch (e) {
      console.log('Change Status Error ', e)
    }
  }

  return (
    <div className='flex flex-wrap justify-between sm:items-center max-sm:flex-col gap-y-4'>
      <div className='flex flex-col items-start gap-1'>
        <div className='flex items-center gap-2'>
          <Typography variant='h5'>{`Order - ${orderData?.order_number}`}</Typography>
          <Chip
            variant='tonal'
            label={orderData?.status}
            color={statusChipColor[orderData?.status || '']}
            size='small'
          />
          {/* <Chip
            variant='tonal'
            // label={paymentStatus[orderData?.payment ?? 0].text}
            // color={paymentStatus[orderData?.payment ?? 0].color}
            size='small'
          /> */}
        </div>
        <Typography>{`${new Date(orderData?.ordered_at ?? '').toLocaleString()}`}</Typography>
      </div>
      <div className='flex gap-4'>
        {/* <Button variant='outlined' color='success' onClick={() => handleChangeOrderStatus(orderData.id, 'completed')}>
          Complete
        </Button> */}
        <Button color='error' variant='outlined' onClick={() => setCompleteOpen(true)}>
          Complete
        </Button>
        <Button variant='outlined' color='error' onClick={() => handleChangeOrderStatus(orderData.id, 'canceled')}>
          Cancel
        </Button>
        {/* <Button variant='outlined' color='warning' onClick={() => handleChangeOrderStatus(orderData.id, 'refunded')}>
          Refund
        </Button> */}
        <Button variant='outlined' color='primary' onClick={() => handleChangeOrderStatus(orderData.id, 'delivering')}>
          Delivering
        </Button>
        <Button variant='outlined' color='info' onClick={() => handleChangeOrderStatus(orderData.id, 'preparing')}>
          Preparing
        </Button>
        {/* <Button variant='outlined' color='secondary' onClick={() => handleChangeOrderStatus(orderData.id, 'ordered')}>
          Ordered
        </Button> */}
      </div>
      {/* <OpenDialogOnElementClick
        element={Button}
        elementProps={buttonProps('Delete Order', 'error', 'outlined')}
        dialog={ConfirmationDialog}
        dialogProps={{ type: 'delete-order' }}
      /> */}
      <div>
        <Dialog
          fullWidth='md'
          open={completeOpen}
          onClose={() => setCompleteOpen(false)}
          PaperProps={{
            component: 'form',
            onSubmit: async event => {
              event.preventDefault()
              const formData = new FormData(event.currentTarget)
              const formJson = Object.fromEntries(formData.entries())
              const remark = formJson.remark
              const image = formJson.image
              const fileUploadUrl = await getFileUploadUrl({
                variables: {
                  content_type: 'image',
                  folder: 'products'
                }
              })

              const uploadedFileUrl = await uploadFile(
                image,
                fileUploadUrl.data.getFileUploadUrl.fileUploadUrl,
                'image'
              )
              await completeOrder({
                variables: { completion_photo_url: uploadedFileUrl, id: orderData.id, remark: remark }
              })
              await handleChangeOrderStatus(orderData.id, 'completed')
              setGlobalMsg('✅ Image Send Successfull')
              setCompleteOpen(false)
            }
          }}
        >
          <DialogTitle>Order Complete</DialogTitle>
          <DialogContent>
            <TextField
              multiline
              autoFocus
              margin='dense'
              id='remark'
              name='remark'
              label='Remark'
              fullWidth
              variant='standard'
            />
            <br />
            <br />
            <br />
            <TextField
              type='file'
              autoFocus
              margin='dense'
              id='image'
              name='image'
              alt='image'
              // label='completion_image'
              fullWidth
              variant='standard'
            />
          </DialogContent>

          <DialogActions>
            <Button color='error' onClick={() => setCompleteOpen(false)}>
              Cancel
            </Button>
            <Button color='success' type='submit'>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Alert />
    </div>
  )
}

export default OrderDetailHeader
