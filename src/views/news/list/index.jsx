'use client'
import { NEWS_AGGREGATE } from '@/graphql/queries'
import { useSuspenseQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import React from 'react'
import NewPostCard from './NewPostCard'
import NewListTable from './NewListTable'

const index = () => {
  const { data: newsAggregate } = useSuspenseQuery(NEWS_AGGREGATE)
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={3}>
        <NewPostCard count={newsAggregate.totalNews.aggregate.count} title='Total' />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <NewPostCard count={newsAggregate.categoryNews.aggregate.count} title='Category' />
      </Grid>
      {/* <Grid item xs={12} sm={6} md={3}>
        <NewPostCard count={newsAggregate.disableNews.aggregate.count} title='Disable' />
      </Grid> */}
      {/* <Grid item xs={12} sm={6} md={3}>
        <NewPostCard count={newsAggregate.activeNews.aggregate.count} title='Active' />
      </Grid> */}
      <Grid item xs={12}>
        <NewListTable />
      </Grid>
    </Grid>
  )
}

export default index
