// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ServerTokenListTable from './ServerTokenListTable'
import ServerTokenCard from './ServerTokenCard'

const ServerTokenList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ServerTokenCard />
      </Grid>
      <Grid item xs={12}>
        <ServerTokenListTable />
      </Grid>
    </Grid>
  )
}

export default ServerTokenList
