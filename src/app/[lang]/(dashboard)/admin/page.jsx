'use client'

import { ADMIN_ROLES_AGGREGATE } from '@/graphql/queries'
import AdminCard from '@/views/admin/lists/AdminCard'
// Component Imports
import AdminTable from '@/views/admin/lists/AdminTable'
import { useSuspenseQuery } from '@apollo/client'
import { Grid } from '@mui/material'

const eCommerceProductsCategory = () => {
  const { data: adminRoles } = useSuspenseQuery(ADMIN_ROLES_AGGREGATE)

  return (
    <Grid container spacing={3}>
      <Grid item md={2} xs={12} sm={6}>
        <AdminCard count={adminRoles.adminRole.aggregate.count} title='Admin' />
      </Grid>
      <Grid item md={2} xs={12} sm={6}>
        <AdminCard count={adminRoles.managerRole.aggregate.count} title='Manager' />
      </Grid>
      <Grid item md={2} xs={12} sm={6}>
        <AdminCard count={adminRoles.saleRole.aggregate.count} title='Sale' />
      </Grid>
      <Grid item md={2} xs={12} sm={6}>
        <AdminCard count={adminRoles.financeRole.aggregate.count} title='Finance' />
      </Grid>
      <Grid item md={2} xs={12} sm={6}>
        <AdminCard count={adminRoles.deliveryRole.aggregate.count} title='Delivery' />
      </Grid>
      <Grid item md={2} xs={12} sm={6}>
        <AdminCard count={adminRoles.serviceRole.aggregate.count} title='Service' />
      </Grid>

      <Grid item xs={12}>
        <AdminTable />
      </Grid>
    </Grid>
  )
}

export default eCommerceProductsCategory
