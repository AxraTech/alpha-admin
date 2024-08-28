'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import OrderDetailHeader from './DiscountDetailHeader'
import DiscountDetailsCard from './DiscountDetailsCard'
import DiscountDetailHeader from './DiscountDetailHeader'
import ShippingActivity from './ShippingActivityCard'
import CustomerDetails from './CustomerDetailsCard'
import ShippingAddress from './ShippingAddressCard'

import BillingAddress from './BillingAddressCard'
import { useParams } from 'next/navigation'
import { PRODCUT_DISCOUNT_BY_ID } from '@/graphql/queries'
import { useSuspenseQuery } from '@apollo/client'

const ProductDiscountDetails = () => {
  const { id } = useParams()
  const { data } = useSuspenseQuery(PRODCUT_DISCOUNT_BY_ID, { variables: { id: id } })

  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <OrderStatusAction discountData={data?.product_discounts_by_pk} />
      </Grid> */}
      {/* <Grid item xs={12}>
        <DiscountDetailHeader discountData={data?.product_discounts_by_pk} />
      </Grid> */}
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <DiscountDetailsCard discountData={data?.product_discounts_by_pk} />
          </Grid>
          {/* <Grid item xs={12}>
            <ShippingActivity disountData={disountData} />
          </Grid> */}
        </Grid>
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomerDetails disountData={disountData} />
          </Grid>
          <Grid item xs={12}>
            <ShippingAddress disountData={disountData} />
          </Grid>
          <Grid item xs={12}>
            <BillingAddress />
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  )
}

export default ProductDiscountDetails
