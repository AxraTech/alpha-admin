'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProductDetailsCard from './ProductDetailsCard'

import { GET_ALL_PRODUCT_DISCOUNT, PRODUCTS_BY_ID } from '@/graphql/queries'
import { useSuspenseQuery } from '@apollo/client'
import { useParams } from 'next/navigation'
import ProductImage from '../add/ProductImage'
import DiscountListTable from '../discount/list/DiscountListTable'
import { useState } from 'react'

const ProductDetails = () => {
  const { id } = useParams()
  const { data: productId } = useSuspenseQuery(PRODUCTS_BY_ID, { variables: { id: id } })
  const productData = productId?.products_by_pk
  const { data: discountData } = useSuspenseQuery(GET_ALL_PRODUCT_DISCOUNT, {
    variables: { product_id: productData.id },
    fetchPolicy: 'network-only'
  })

  const [data, setData] = useState(...[discountData.product_discounts])

  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12}>
        <OrderStatusAction productData={productData} />
      </Grid> */}
      {/* <Grid item xs={12}>
        <OrderDetailHeader productData={productData} />
      </Grid> */}
      <Grid item xs={12} md={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <ProductImage productId={id} productData={productData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductDetailsCard productData={productData} />
          </Grid>

          <Grid item xs={12}>
            <DiscountListTable discountDatas={data} productId={id} />
          </Grid>

          {/* <Grid item xs={12}>
            <ShippingActivity productData={productData} />
          </Grid> */}
        </Grid>
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomerDetails productData={productData} />
          </Grid>
          <Grid item xs={12}>
            <ShippingAddress productData={productData} />
          </Grid>
          <Grid item xs={12}>
            <BillingAddress />
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  )
}

export default ProductDetails
