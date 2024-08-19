// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import QuotationListTable from './QuotationListTable'
import QuotationCard from './QuotationCard'
import { useQuery, useSuspenseQuery } from '@apollo/client'
import { GET_ALL_INVOICES } from '@/graphql/queries'

const InvoiceList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <QuotationCard />
      </Grid>
      <Grid item xs={12}>
        <QuotationListTable />
      </Grid>
    </Grid>
  )
}

export default InvoiceList
