'use client'
// MUI Imports
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { serviceStatusChipColor } from '@/components/helper/StatusColor'
// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
// import { useParams } from 'next/navigation'
import { useMutation, useQuery, useSuspenseQuery } from '@apollo/client'
import { ORDERS_BY_ID, SERVICE_STATUS, SERVICE_TOKEN_BY_ID } from '@/graphql/queries'
import { CHANGE_ORDER_STATUS, CHANGE_SERVICE_STATUS, DELETE_ORDERS, REJECT_SERVICE_TOKEN } from '@/graphql/mutations'
import { useState } from 'react'
import { useApp } from '@/app/ApolloWrapper'
import EditServiceDrawer from './EditServiceDrawer'
import { Dialog, DialogActions, DialogContent, DialogTitle, Modal, TextField } from '@mui/material'
export const paymentStatus = {
  1: { text: 'Paid', color: 'success' },
  2: { text: 'Pending', color: 'warning' },
  3: { text: 'Cancelled', color: 'secondary' },
  4: { text: 'Failed', color: 'error' }
}
// export const statusChipColor = {
//   completed: 'success',
//   canceled: 'error',
//   refunded: 'warning',
//   delivering: 'primary',
//   preparing: 'info',
//   ordered: 'secondary'
// }

const OrderDetailHeader = ({ serviceData }) => {
  const { setGlobalMsg } = useApp()
  const [editServicerOpen, setEditServicerOpen] = useState(false)
  const [rejectServicerOpen, setRejectServicerOpen] = useState(false)
  const [deleteOrder] = useMutation(DELETE_ORDERS)
  const [status, setStatus] = useState()
  const [acceptStatus, setAcceptStatus] = useState()
  const [changeOrderStatus] = useMutation(CHANGE_SERVICE_STATUS, { refetchQueries: [SERVICE_TOKEN_BY_ID] })
  const { data: serviceStatus } = useSuspenseQuery(SERVICE_STATUS)
  const [rejectService] = useMutation(REJECT_SERVICE_TOKEN, { refetchQueries: [SERVICE_TOKEN_BY_ID] })
  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  const handleChangeOrderStatus = async (id, status, dateObj) => {
    try {
      const result = await changeOrderStatus({
        variables: {
          data: {
            ...status,
            ...dateObj
          },
          id: id
        }
      })

      setGlobalMsg('Change Service Status')
    } catch (e) {
      console.log('Change Status Error ', e)
    }
  }

  return (
    <>
      <div className='flex flex-wrap justify-between sm:items-center max-sm:flex-col gap-y-4'>
        <div className='flex flex-col items-start gap-1'>
          <div className='flex items-center gap-2'>
            <Typography variant='h5'>{`Service Token - ${serviceData?.token_number}`}</Typography>
            <Chip
              variant='tonal'
              label={serviceData?.status}
              color={serviceStatusChipColor[serviceData?.status || '']}
              size='small'
            />
            {/* <Chip
            variant='tonal'
            // label={paymentStatus[serviceData?.payment ?? 0].text}
            // color={paymentStatus[serviceData?.payment ?? 0].color}
            size='small'
          /> */}
          </div>
          {/* <Typography>{`${new Date(serviceData?.created_at ?? '').toLocaleString()}`}</Typography> */}
        </div>
        {console.log('set tus ', serviceData.status)}
        {(status === 'accept' || serviceData.status === 'picking up') && serviceData.status !== 'rejected' && (
          <>
            <div className='flex gap-4'>
              <Button
                variant='outlined'
                color='success'
                onClick={() => {
                  handleChangeOrderStatus(serviceData?.id, { status: 'completed' }, { completed_at: new Date() })
                  setGlobalMsg('✅ Changed status')
                  setStatus('accept')
                }}
              >
                Complete
              </Button>
              {/* <Button
            variant='outlined'
            color='error'
            onClick={async () => {
              await changeOrderStatus({ variables: { status: 'canceled', service_token_id: serviceData.id } })
              setGlobalMsg('✅ Changed status')
            }}
          >
            Cancel
          </Button> */}
              <Button
                variant='outlined'
                color='primary'
                onClick={async () => {
                  await changeOrderStatus({ variables: { status: 'delivering', service_token_id: serviceData.id } })
                  setGlobalMsg('✅ Changed status')
                  setStatus('accept')
                }}
              >
                Delivering
              </Button>
              {/* <Button
            variant='outlined'
            color='info'
            onClick={async () => {
              await changeOrderStatus({ variables: { status: 'awaiting delivery', service_token_id: serviceData.id } })
              setGlobalMsg('✅ Changed status')
            }}
          >
            Awaiting Delivery
          </Button>
          <Button
            variant='outlined'
            color='primary'
            onClick={async () => {
              await changeOrderStatus({ variables: { status: 'picking up', service_token_id: serviceData.id } })
              setGlobalMsg('✅ Changed status')
            }}
          >
            Picking Up
          </Button> */}
              <Button
                variant='outlined'
                color='warning'
                onClick={async () => {
                  await changeOrderStatus({ variables: { status: 'processing', service_token_id: serviceData.id } })
                  setGlobalMsg('✅ Changed status')
                  setStatus('accept')
                }}
              >
                Processing
              </Button>
            </div>
          </>
        )}

        <div className='flex gap-5'>
          <Button variant='outlined' className='text-success' onClick={() => setEditServicerOpen(!editServicerOpen)}>
            Accept
          </Button>
          <Button
            variant='outlined'
            className='text-error'
            onClick={() => {
              setRejectServicerOpen(true)
            }}
          >
            Reject
          </Button>
        </div>

        {/* <OpenDialogOnElementClick
        element={Button}
        elementProps={buttonProps('Delete Order', 'error', 'outlined')}
        dialog={ConfirmationDialog}
        dialogProps={{ type: 'delete-order' }}
      /> */}
        {/* <Button variant='contained' onClick={() => setEditServicerOpen(!editServicerOpen)} className='max-sm:is-full'>
          Edit Service
        </Button> */}
      </div>
      <div>
        <Dialog
          fullWidth='md'
          open={rejectServicerOpen}
          onClose={() => setRejectServicerOpen(false)}
          PaperProps={{
            component: 'form',
            onSubmit: async event => {
              event.preventDefault()
              const formData = new FormData(event.currentTarget)
              const formJson = Object.fromEntries(formData.entries())
              const reasons = formJson.rejected_reason
              await rejectService({
                variables: { rejected_reason: reasons, service_token_id: serviceData.id }
              })

              setGlobalMsg('✅ Reject reason send successfull')
              setRejectServicerOpen(false)
            }
          }}
        >
          <DialogTitle>Reject Reason</DialogTitle>
          <DialogContent>
            <TextField
              multiline
              autoFocus
              margin='dense'
              id='rejected_reason'
              name='rejected_reason'
              label='Reason'
              fullWidth
              variant='standard'
            />
          </DialogContent>
          <DialogActions>
            <Button color='error' onClick={() => setRejectServicerOpen(false)}>
              Cancel
            </Button>
            <Button color='success' type='submit'>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <EditServiceDrawer
        open={editServicerOpen}
        handleClose={() => setEditServicerOpen(!editServicerOpen)}
        serviceData={serviceData}
        serivceStatus={serviceStatus}
        setStatus={setStatus}
        setAcceptStatus={setAcceptStatus}
        // setData={setData}
      />
    </>
  )
}

export default OrderDetailHeader
