'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import OrderDetailHeader from './OrderDetailHeader'
import OrderDetailsCard from './OrderDetailsCard'
import ShippingActivity from './ShippingActivityCard'
import CustomerDetails from './CustomerDetailsCard'
import ShippingAddress from './ShippingAddressCard'

import BillingAddress from './BillingAddressCard'
import { useParams } from 'next/navigation'
import { ORDERS_BY_ID } from '@/graphql/queries'
import { useQuery, useSuspenseQuery } from '@apollo/client'

const OrderDetails = () => {
  const { id } = useParams()
  const { data } = useSuspenseQuery(ORDERS_BY_ID, { variables: { id: id } })
  const orderData = data?.orders_by_pk

  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <OrderStatusAction orderData={orderData} />
      </Grid> */}
      <Grid item xs={12}>
        <OrderDetailHeader orderData={orderData} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <OrderDetailsCard orderData={orderData} />
          </Grid>
          <Grid item xs={12}>
            <ShippingActivity orderData={orderData} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomerDetails orderData={orderData} />
          </Grid>
          <Grid item xs={12}>
            <ShippingAddress orderData={orderData} />
          </Grid>
          {/* <Grid item xs={12}>
            <BillingAddress />
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OrderDetails
