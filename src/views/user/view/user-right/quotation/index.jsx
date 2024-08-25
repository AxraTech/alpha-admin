// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProjectListTable from './ProjectListTable'
import UserActivityTimeLine from './UserActivityTimeline'
import QuotationUserListTable from './QuotationUserListTable'

const OverViewTab = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <QuotationUserListTable />
      </Grid>
    </Grid>
  )
}

export default OverViewTab
