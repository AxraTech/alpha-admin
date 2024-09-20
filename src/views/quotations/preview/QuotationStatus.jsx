import { useApp } from '@/app/ApolloWrapper'
import Alert from '@/components/helper/Alert'
import { CHANGE_QUOTATION_STATUS, SEND_Q_INVOICE_FILE } from '@/graphql/mutations'
import { QUOTATION_BY_ID } from '@/graphql/queries'
import { useMutation } from '@apollo/client'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'

const QuotationStatus = ({ quotationData }) => {
  const { setGlobalMsg } = useApp()
  const [rejectServicerOpen, setRejectServicerOpen] = useState(false)
  const [changeQuotationStatus] = useMutation(CHANGE_QUOTATION_STATUS, { refetchQueries: [QUOTATION_BY_ID] })
  const [sendQInvoice] = useMutation(SEND_Q_INVOICE_FILE, { refetchQueries: [QUOTATION_BY_ID] })

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
      <div>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          fullWidth
          onClick={() => handleChangeOrderStatus(quotationData?.id, 'negotiation')}
        >
          Negotiate
        </Button>
      </div>
      <div className='flex  justify-center gap-3 mt-4'>
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
          // onClick={() => handleChangeOrderStatus(quotationData?.id, 'accepted')}
          onClick={async () => {
            await sendQInvoice({ variables: { quotation_id: quotationData.id } })
            setGlobalMsg('✅ Quotation Accepted')
          }}
        >
          Accepted
        </Button>

        {/* <Button
          variant='outlined'
          color='error'
          size='large'
          onClick={() => handleChangeOrderStatus(quotationData?.id, 'rejected')}
        >
          Reject
        </Button> */}

        <Button
          variant='outlined'
          className='text-error'
          onClick={() => {
            setRejectServicerOpen(true)
          }}
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

              await changeQuotationStatus({
                variables: {
                  quotation_id: quotationData?.id,
                  status: 'rejected',
                  rejected_reason: reasons
                }
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
      <Alert />
    </div>
  )
}

export default QuotationStatus
