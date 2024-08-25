// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProjectListTable from './ProjectListTable'
import UserActivityTimeLine from './UserActivityTimeline'
import InvoiceListTable from './InvoiceListTable'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'
import { useSuspenseQuery } from '@apollo/client'
import { GET_ALL_INVOICES } from '@/graphql/queries'

const OverViewTab = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <InvoiceListTable />
      </Grid>
    </Grid>
  )
}

export default OverViewTab
