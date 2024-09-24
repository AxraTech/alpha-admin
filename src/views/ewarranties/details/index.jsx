'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import EwarrantyDetailHeader from './EwarrantyDetailHeader'
import EwarrantyDetailsCard from './EwarrantyDetailsCard'
import ShippingActivity from './ShippingActivityCard'
import CustomerDetails from './CustomerDetailsCard'
import ShippingAddress from './ShippingAddressCard'

import BillingAddress from './BillingAddressCard'
import { useParams } from 'next/navigation'
import { EWARRANTIES_BY_ID } from '@/graphql/queries'
import { useSuspenseQuery } from '@apollo/client'

const OrderDetails = () => {
  const { id } = useParams()
  const { data } = useSuspenseQuery(EWARRANTIES_BY_ID, { variables: { id: id } })
  const warrantyData = data?.ewarranties_by_pk

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <EwarrantyDetailHeader warrantyData={warrantyData} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <EwarrantyDetailsCard warrantyData={warrantyData} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomerDetails warrantyData={warrantyData} />
          </Grid>
          <Grid item xs={12}>
            <ShippingAddress warrantyData={warrantyData} />
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
