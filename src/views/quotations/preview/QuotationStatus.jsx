import { useApp } from '@/app/ApolloWrapper'
import { CHANGE_QUOTATION_STATUS } from '@/graphql/mutations'
import { useMutation } from '@apollo/client'
import { Button } from '@mui/material'
import React from 'react'

const QuotationStatus = ({ quotationData }) => {
  const { setGlobalMsg } = useApp()
  const [changeQuotationStatus] = useMutation(CHANGE_QUOTATION_STATUS)
  const handleChangeOrderStatus = async (id, status) => {
    try {
      const result = await changeQuotationStatus({
        variables: {
          data: {
            ...status
          },
          id: id
        }
      })

      setGlobalMsg('Change Order Status')
    } catch (e) {
      console.log('Change Status Error ', e)
    }
  }
  return (
    <div>
      <div className='flex gap-4'>
        <Button
          variant='outlined'
          color='success'
          onClick={() =>
            handleChangeOrderStatus(quotationData?.id, { status: 'completed' }, { completed_at: new Date() })
          }
        >
          Complete
        </Button>
        <Button
          variant='outlined'
          color='error'
          onClick={() => handleChangeOrderStatus(quotationData?.id, { status: 'rejected' })}
        >
          Reject
        </Button>
        <Button
          variant='outlined'
          color='info'
          onClick={() => handleChangeOrderStatus(quotationData?.id, { status: 'accepted' })}
        >
          Accepted
        </Button>
        <Button
          variant='outlined'
          color='warning'
          onClick={() => handleChangeOrderStatus(quotationData?.id, { status: 'pending' })}
        >
          Pending
        </Button>
      </div>
    </div>
  )
}

export default QuotationStatus
