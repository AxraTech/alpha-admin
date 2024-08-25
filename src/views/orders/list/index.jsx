'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
// import OrderCard from './OrderCard'
import OrderListTable from './OrderListTable'
import { useSuspenseQuery } from '@apollo/client'
import { GET_ALL_ORDERS, ORDERS_AGGREGATE } from '@/graphql/queries'
import HorizontalWithSubtitle from '@/components/card-statistics/HorizontalWithSubtitle'
import OrderCard from './OrderCard'
import { Card } from '@mui/material'

const OrderList = () => {
  const { data: orderAggregate } = useSuspenseQuery(ORDERS_AGGREGATE)

  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={3} xs={12} sm={6}>
          <OrderCard count={orderAggregate.activeOrder.aggregate.count} title='Active' />
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <OrderCard count={orderAggregate.completeOrder.aggregate.count} title='Completed' color='success' />
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <OrderCard count={orderAggregate.refundedOrder.aggregate.count} title='Refunded' />
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <OrderCard count={orderAggregate.canceledOrder.aggregate.count} title='Canceled' />
        </Grid>

        <Grid item xs={12}>
          <OrderListTable />
        </Grid>
      </Grid>
    </>
  )
}

export default OrderList
