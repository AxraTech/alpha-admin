'use client'
// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// Component Imports
import AddPaymentDrawer from '@views/invoice/shared/AddPaymentDrawer'
import SendInvoiceNewDrawer from '@views/invoice/shared/SendInvoiceNewDrawer'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'
import { useSuspenseQuery } from '@apollo/client'
import { GET_PAYMENT_METHODS } from '@/graphql/queries'

const PreviewActions = ({ id, onButtonClick, invoiceData }) => {
  // States
  const [paymentDrawerOpen, setPaymentDrawerOpen] = useState(false)
  const [sendDrawerOpen, setSendDrawerOpen] = useState(false)
  const { data: paymentMethods } = useSuspenseQuery(GET_PAYMENT_METHODS)
  // Hooks
  const { lang: locale } = useParams()

  return (
    <>
      <Card>
        <CardContent className='flex flex-col gap-4'>
          <Button
            fullWidth
            variant='contained'
            className='capitalize'
            startIcon={<i className='ri-send-plane-line' />}
            onClick={() => setSendDrawerOpen(true)}
          >
            Send Invoice File
          </Button>
          {/* <Button fullWidth color='secondary' variant='outlined' className='capitalize'>
            Download
          </Button> */}
          {/* <div className='flex items-center gap-4'>
            <Button fullWidth color='secondary' variant='outlined' className='capitalize' onClick={onButtonClick}>
              Print
            </Button>
            <Button
              fullWidth
              component={Link}
              color='secondary'
              variant='outlined'
              className='capitalize'
              href={getLocalizedUrl(`/invoice/edit/${id}`, locale)}
            >
              Edit
            </Button>
          </div> */}
          <Button
            fullWidth
            color='success'
            variant='contained'
            className='capitalize'
            onClick={() => setPaymentDrawerOpen(true)}
            startIcon={<i className='ri-money-dollar-circle-line' />}
          >
            Add Payment
          </Button>
        </CardContent>
      </Card>
      <AddPaymentDrawer
        open={paymentDrawerOpen}
        handleClose={() => setPaymentDrawerOpen(false)}
        invoiceData={invoiceData}
        paymentMethods={paymentMethods}
      />
      <SendInvoiceNewDrawer
        open={sendDrawerOpen}
        handleClose={() => setSendDrawerOpen(false)}
        invoiceData={invoiceData}
      />
    </>
  )
}

export default PreviewActions
