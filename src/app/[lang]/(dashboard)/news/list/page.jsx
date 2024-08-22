// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import NewListTable from '@views/news/list/NewListTable'
import NewPostCard from '@views/news/list/NewPostCard'

const eCommerceProductsList = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <NewPostCard />
      </Grid>
      <Grid item xs={12}>
        <NewListTable />
      </Grid>
    </Grid>
  )
}

export default eCommerceProductsList
