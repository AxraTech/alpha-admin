import { useApp } from '@/app/ApolloWrapper'
import { CHANGE_QUOTATION_STATUS } from '@/graphql/mutations'
import { QUOTATION_BY_ID } from '@/graphql/queries'
import { useMutation } from '@apollo/client'
import { Button } from '@mui/material'
import React from 'react'

const QuotationStatus = ({ quotationData }) => {
  const { setGlobalMsg } = useApp()
  const [changeQuotationStatus] = useMutation(CHANGE_QUOTATION_STATUS, { refetchQueries: [QUOTATION_BY_ID] })
  const handleChangeOrderStatus = async (id, status) => {
    try {
      const result = await changeQuotationStatus({
        variables: {
          quotation_id: id,
          status: status
        }
      })

      setGlobalMsg('✅ Change Quotation Status')
    } catch (e) {
      console.log('Change Status Error ', e)
    }
  }
  return (
    <div>
      <div className='flex gap-4 justify-end'>
        {/* <Button
          variant='outlined'
          color='success'
          onClick={() =>
            handleChangeOrderStatus(quotationData?.id, { status: 'completed' }, { completed_at: new Date() })
          }
        >
          Complete
        </Button> */}
        <Button
          variant='outlined'
          color='info'
          size='large'
          onClick={() => handleChangeOrderStatus(quotationData?.id, 'accepted')}
        >
          Accepted
        </Button>
        <Button
          variant='outlined'
          color='error'
          size='large'
          onClick={() => handleChangeOrderStatus(quotationData?.id, 'rejected')}
        >
          Reject
        </Button>

        {/* <Button
          variant='outlined'
          color='warning'
          onClick={() => handleChangeOrderStatus(quotationData?.id, { status: 'pending' })}
        >
          Pending
        </Button> */}
      </div>
    </div>
  )
}

export default QuotationStatus
