'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports

import ServiceDetailHeader from './ServiceDetailHeader'
import ServiceDetailsCard from './ServiceDetailsCard'
import ShippingActivity from './ShippingActivityCard'
import ShippingAddress from './ShippingAddressCard'
import CustomerDetails from './CustomerDetailsCard'
import BillingAddress from './BillingAddressCard'
import { useSuspenseQuery } from '@apollo/client'
import { useParams } from 'next/navigation'
import { SERVICE_TOKEN_BY_ID } from '@/graphql/queries'

const ServiceDetails = () => {
  const { id } = useParams()
  const { data } = useSuspenseQuery(SERVICE_TOKEN_BY_ID, { variables: { id: id } })
  const serviceData = data?.service_tokens_by_pk
  const handleButtonClick = () => {
    window.print()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ServiceDetailHeader serviceData={serviceData} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ServiceDetailsCard serviceData={serviceData} />
          </Grid>
          <Grid item xs={12}>
            <ShippingActivity serviceData={serviceData} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomerDetails serviceData={serviceData} />
          </Grid>
          {/* <Grid item xs={12}>
            <ShippingAddress serviceData={serviceData} />
          </Grid> */}
          {/* <Grid item xs={12}>
          <BillingAddress />
        </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ServiceDetails
