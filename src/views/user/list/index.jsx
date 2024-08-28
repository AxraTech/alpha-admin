// MUI Imports
'use client'

import Grid from '@mui/material/Grid'

// Component Imports
import UserListTable from './UserListTable'
import UserListCards from './UserListCards'
import { useSuspenseQuery } from '@apollo/client'
import { GET_USERS, USER_STATUS_AGGREGATE, USERS_ROLE_AGGREGATES } from '@/graphql/queries'

const UserList = () => {
  const { data } = useSuspenseQuery(GET_USERS)
  const { data: userStatusAggregate } = useSuspenseQuery(USER_STATUS_AGGREGATE)
  const { data: userRoleAggregate } = useSuspenseQuery(USERS_ROLE_AGGREGATES)
  return (
    <Grid container spacing={6}>
      <Grid item md={3} xs={12} sm={6}>
        <UserListCards count={userRoleAggregate.consumerUser.aggregate.count} title='Consumer' />
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <UserListCards count={userRoleAggregate.dealerUser.aggregate.count} title='Dealer' />
      </Grid>

      <Grid item md={3} xs={12} sm={6}>
        <UserListCards count={userStatusAggregate.pendingUser.aggregate.count} title='Pending' />
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <UserListCards count={userStatusAggregate.disabelUser.aggregate.count} title='Disable' />
      </Grid>

      <Grid item xs={12}>
        <UserListTable tableData={data.users} />
      </Grid>
    </Grid>
  )
}

export default UserList
