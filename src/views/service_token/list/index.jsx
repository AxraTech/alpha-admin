'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ServerTokenListTable from './ServerTokenListTable'
import ServerTokenCard from './ServerTokenCard'
import ServiceListCards from './ServiceListCards'
import { useSuspenseQuery } from '@apollo/client'
import { SERVICE_AGGREGATE, USER_SERVICE_AGGREGATE } from '@/graphql/queries'

const ServerTokenList = () => {
  const { data: serviceAggregate } = useSuspenseQuery(SERVICE_AGGREGATE)
  const { data: userService } = useSuspenseQuery(USER_SERVICE_AGGREGATE)
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <ServerTokenCard />
      </Grid> */}

      <Grid item md={3} xs={12} sm={6}>
        <ServiceListCards count={serviceAggregate.activeService.aggregate.count} title='Active' />
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <ServiceListCards count={serviceAggregate.canceledService.aggregate.count} title='Cancel' />
      </Grid>

      <Grid item md={3} xs={12} sm={6}>
        <ServiceListCards count={serviceAggregate.receivedService.aggregate.count} title='Receive' />
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <ServiceListCards count={serviceAggregate.completedService.aggregate.count} title='Complete' />
      </Grid>
      {/* <Grid item md={3} xs={12} sm={6}>
        <ServiceListCards count={serviceAggregate.processingService.aggregate.count} title='Processing' />
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <ServiceListCards count={serviceAggregate.deliverService.aggregate.count} title='Delivering' />
      </Grid> */}

      <Grid item xs={12}>
        <ServerTokenListTable />
      </Grid>
    </Grid>
  )
}

export default ServerTokenList
