'use client'
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import InvoiceListTable from './InvoiceListTable'
import InvoiceListCards from './InvoiceListCard'
import { useSuspenseQuery } from '@apollo/client'
import { INVOICE_AGGREGATE, USER_INVOICE_AGGREGATE } from '@/graphql/queries'

const InvoiceList = () => {
  const { data: invoiceAggregate } = useSuspenseQuery(INVOICE_AGGREGATE)
  const { data: userInvoiceAggregate } = useSuspenseQuery(USER_INVOICE_AGGREGATE)
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <InvoiceCard />
      </Grid> */}
      <Grid item md={3} xs={12} sm={6}>
        <InvoiceListCards count={userInvoiceAggregate.users_aggregate.aggregate.count} title='User' />
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <InvoiceListCards count={invoiceAggregate.paidInvoice.aggregate.count} title='Paid' />
      </Grid>
      {/* <Grid item md={3} xs={12} sm={6}>
        <InvoiceListCards count={invoiceAggregate.partiallPaidInvoice.aggregate.count} title='Partially Paid' />
      </Grid> */}
      <Grid item md={3} xs={12} sm={6}>
        <InvoiceListCards count={invoiceAggregate.UnPaindInvoice.aggregate.count} title='UnPaid' />
      </Grid>

      <Grid item xs={12}>
        <InvoiceListTable />
      </Grid>
    </Grid>
  )
}

export default InvoiceList
