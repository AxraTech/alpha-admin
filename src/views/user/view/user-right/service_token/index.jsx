// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProjectListTable from './ProjectListTable'
import UserActivityTimeLine from './UserActivityTimeline'
import ServiceTokenUserListTable from './ServiceTokenUserListTable'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'
import { useSuspenseQuery } from '@apollo/client'
import { GET_ALL_INVOICES } from '@/graphql/queries'

const ServiceTokenViewTab = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ServiceTokenUserListTable />
      </Grid>
    </Grid>
  )
}

export default ServiceTokenViewTab
