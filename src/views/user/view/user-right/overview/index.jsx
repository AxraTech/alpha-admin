// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProjectListTable from './ProjectListTable'
import UserActivityTimeLine from './UserActivityTimeline'
import InvoiceListTable from './InvoiceListTable'

const OverViewTab = async () => {
  // Vars
  // const invoiceData = await getInvoiceData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <InvoiceListTable />
      </Grid>
    </Grid>
  )
}

export default OverViewTab
