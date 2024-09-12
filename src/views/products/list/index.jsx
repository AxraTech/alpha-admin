'use client'

import { PRODUCT_AGGREGATE } from '@/graphql/queries'
import { useSuspenseQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'
import ProductListTable from './ProductListTable'

const index = () => {
  const { data: productAggregate } = useSuspenseQuery(PRODUCT_AGGREGATE)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={3} sm={6}>
        <ProductCard count={productAggregate.activeProduct.aggregate.count} title='Active' />
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <ProductCard count={productAggregate.brandProduct.aggregate.count} title='Brand' />
      </Grid>
      <Grid item xs={12} md={3} sm={6}>
        <ProductCard count={productAggregate.categoryProduct.aggregate.count} title='Category' />
      </Grid>
      {/* <Grid item xs={12} md={3} sm={6}>
        <ProductCard count={productAggregate.disableProduct.aggregate.count} title='Disable' />
      </Grid> */}

      <Grid item xs={12}>
        <ProductListTable />
      </Grid>
    </Grid>
  )
}

export default index
