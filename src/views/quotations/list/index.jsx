'use client'
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import QuotationListTable from './QuotationListTable'
import QuotationListCards from './QuotationListCard'
import { useQuery, useSuspenseQuery } from '@apollo/client'
import { QUOTATION_AGGREGATE, USER_QUOTATION_AGGREGATE } from '@/graphql/queries'

const QuotationList = () => {
  const { data: quotationAggregate } = useSuspenseQuery(QUOTATION_AGGREGATE)
  const { data: userQuotation } = useSuspenseQuery(USER_QUOTATION_AGGREGATE)
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <QuotationCard />
      </Grid> */}

      <Grid item md={3} xs={12} sm={6}>
        <QuotationListCards count={userQuotation.users_aggregate.aggregate.count} title='User' />
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <QuotationListCards count={quotationAggregate.pendingQuotation.aggregate.count} title='Pending' />
      </Grid>
      {/* <Grid item md={3} xs={12} sm={6}>
        <QuotationListCards count={quotationAggregate.acceptedQuotation.aggregate.count} title='Accept' />
      </Grid> */}
      <Grid item md={3} xs={12} sm={6}>
        <QuotationListCards count={quotationAggregate.rejectedQuotation.aggregate.count} title='Reject' />
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <QuotationListCards count={quotationAggregate.negotiationQuotation.aggregate.count} title='Negotiation' />
      </Grid>
      <Grid item xs={12}>
        <QuotationListTable />
      </Grid>
    </Grid>
  )
}

export default QuotationList
