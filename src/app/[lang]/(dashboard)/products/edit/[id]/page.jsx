'use client'
// MUI Imports

import Grid from '@mui/material/Grid'

// Component Imports
import ProductAddHeader from '@views/products/edit/ProductAddHeader'
import ProductInformation from '@views/products/edit/ProductInformation'
import ProductImage from '@views/products/edit/ProductImage'
import ProductOrganize from '@views/products/edit/ProductOrganize'
import ProductInventory from '@views/products/add/ProductInventory'
import ProductPricing from '@views/products/edit/ProductPricing'
import ProductVariants from '@views/products/edit/ProductVariants'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { ADD_PRODUCT, EDIT_RPODUCTS, IMGAE_UPLOAD } from '@/graphql/mutations'
import { useEffect, useState } from 'react'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'

import { useParams, useRouter } from 'next/navigation'
import { GET_PRODUCTS, PRODUCTS_BY_ID } from '@/graphql/queries'
import { Box } from '@mui/material'
const EditProducts = () => {
  const { id } = useParams()
  const router = useRouter()
  const { setGlobalMsg, loading, setLoading } = useApp()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [brandId, setBrandId] = useState()
  const [catId, setCatId] = useState()
  // const [price, setPrice] = useState()
  const [dealerPrice, setDealerPrice] = useState()
  const [consumerPrice, setConsumerPrice] = useState()
  const [sNo, setSNo] = useState()
  const [warrantyPeriod, setWarrantyPeriod] = useState()
  const [errors, setErrors] = useState()
  const [productMedia, setProductMedia] = useState([])
  const [editProduct] = useMutation(EDIT_RPODUCTS, { fetchPolicy: 'network-only', refetchQueries: [GET_PRODUCTS] })
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)
  const { data } = useSuspenseQuery(PRODUCTS_BY_ID, { variables: { id: id } })

  const productData = data?.products_by_pk

  useEffect(() => {
    if (productData) {
      setTitle(productData?.title)
      setSNo(productData?.serial_number)
      setWarrantyPeriod(productData?.warranty_period)
      setDescription(productData?.description_html)
      setBrandId(productData?.brand_id)
      // setPrice(productData?.price)
      setDealerPrice(productData?.dealer_price)
      setConsumerPrice(productData?.consumer_price)
    }
  }, [productData])

  const handleEditProduct = async () => {
    setLoading(true)

    try {
      // const productMediaUrls = await Promise.all(
      //   productMedia.map(async item => {
      //     const uploadUrl = await getFileUploadUrl({
      //       variables: {
      //         // content_type: item.type.split('/')[0],
      //         content_type: 'image',
      //         folder: 'products'
      //       }
      //     })

      //     const fileUrl = await uploadFile(item, uploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image')

      //     return {
      //       media_type: 'image',
      //       media_url: fileUrl
      //       // width: item.width,
      //       // height: item.height
      //     }
      //   })
      // )

      await editProduct({
        variables: {
          id: productData?.id,
          title: title,
          description_html: description,
          brand_id: brandId,
          category_id: catId?.id,
          serial_number: sNo,
          warranty_period: warrantyPeriod,
          // price: Number(price),
          dealer_price: Number(dealerPrice),
          consumer_price: Number(consumerPrice)
        }
      })
      // router.back()

      setLoading(false)
      setGlobalMsg('✅ Product has been updated')
    } catch (err) {
      setGlobalMsg('❌ Edit Product Error')
      console.log(err.response)
    }
  }

  const handleDiscardProduct = () => {
    router.back()
  }
  if (loading) {
    return <Box sx={{ textAlign: 'center' }}>Loading...</Box>
  }
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ProductAddHeader
            handleDiscardProduct={handleDiscardProduct}
            handleEditProduct={handleEditProduct}
            productData={productData}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <ProductInformation
                setTitle={setTitle}
                title={title}
                setSNo={setSNo}
                sNo={sNo}
                setDescription={setDescription}
                description={description}
                warrantyPeriod={warrantyPeriod}
                setWarrantyPeriod={setWarrantyPeriod}
                errors={errors}
                productData={productData}
              />
            </Grid>
            <Grid item xs={12}>
              <ProductImage files={productMedia} setFiles={setProductMedia} productData={productData} />
            </Grid>
            {/* <Grid item xs={12}>
              <ProductVariants />
            </Grid> */}
            {/* <Grid item xs={12}>
            <ProductInventory />
          </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <ProductPricing
                // price={price}
                // setPrice={setPrice}
                errors={errors}
                productData={productData}
                dealerPrice={dealerPrice}
                setDealerPrice={setDealerPrice}
                consumerPrice={consumerPrice}
                setConsumerPrice={setConsumerPrice}
              />
            </Grid>
            <Grid item xs={12}>
              <ProductOrganize
                brandId={brandId}
                setBrandId={setBrandId}
                catId={catId}
                setCatId={setCatId}
                errors={errors}
                productData={productData}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Alert />
    </>
  )
}

export default EditProducts
