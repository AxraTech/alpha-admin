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
import { ORDERS_BY_ID } from '@/graphql/queries'
import { CHANGE_ORDER_STATUS, CHANGE_SERVICE_STATUS, DELETE_ORDERS } from '@/graphql/mutations'
import { useState } from 'react'
import { useApp } from '@/app/ApolloWrapper'

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

  const [deleteOrder] = useMutation(DELETE_ORDERS)
  const [changeOrderStatus] = useMutation(CHANGE_SERVICE_STATUS)
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
        <Typography>{`${new Date(serviceData?.created_at ?? '').toLocaleString()}`}</Typography>
      </div>
      <div className='flex gap-4'>
        <Button
          variant='outlined'
          color='success'
          onClick={() =>
            handleChangeOrderStatus(serviceData?.id, { status: 'completed' }, { completed_at: new Date() })
          }
        >
          Complete
        </Button>
        <Button
          variant='outlined'
          color='error'
          onClick={() => handleChangeOrderStatus(serviceData?.id, { status: 'canceled' }, { canceled_at: new Date() })}
        >
          Cancel
        </Button>
        <Button
          variant='outlined'
          color='info'
          onClick={() =>
            handleChangeOrderStatus(serviceData?.id, { status: 'received token' }, { received_at: new Date() })
          }
        >
          Receive Token
        </Button>
        <Button
          variant='outlined'
          color='primary'
          onClick={() =>
            handleChangeOrderStatus(serviceData?.id, { status: 'picking up' }, { picking_up_at: new Date() })
          }
        >
          Picking Up
        </Button>
        <Button
          variant='outlined'
          color='warning'
          onClick={() =>
            handleChangeOrderStatus(serviceData?.id, { status: 'processing' }, { processing_at: new Date() })
          }
        >
          Processing
        </Button>
      </div>
      {/* <OpenDialogOnElementClick
        element={Button}
        elementProps={buttonProps('Delete Order', 'error', 'outlined')}
        dialog={ConfirmationDialog}
        dialogProps={{ type: 'delete-order' }}
      /> */}
    </div>
  )
}

export default OrderDetailHeader
