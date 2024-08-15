// MUI Imports
'use client'

import Grid from '@mui/material/Grid'

// Component Imports
import UserListTable from './UserListTable'
import UserListCards from './UserListCards'
import { useSuspenseQuery } from '@apollo/client'
import { GET_USERS } from '@/graphql/queries'

const UserList = () => {
  const { data } = useSuspenseQuery(GET_USERS)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserListCards />
      </Grid>
      <Grid item xs={12}>
        <UserListTable tableData={data.users} />
      </Grid>
    </Grid>
  )
}

export default UserList
