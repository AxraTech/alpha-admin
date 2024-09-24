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

const EwarrantyDetailHeader = ({ warrantyData }) => {
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
          <Typography variant='h5'>{`E-Warranty Number - ${warrantyData?.ewarranty_number}`}</Typography>
        </div>
        <Typography>{`${new Date(warrantyData?.created_at ?? '')?.toLocaleString()}`}</Typography>
      </div>

      <Alert />
    </div>
  )
}

export default EwarrantyDetailHeader
