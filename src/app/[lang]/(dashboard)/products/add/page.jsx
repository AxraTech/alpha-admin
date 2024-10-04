'use client'

// MUI Imports

import Grid from '@mui/material/Grid'

// Component Imports
import ProductAddHeader from '@views/products/add/ProductAddHeader'
import ProductInformation from '@views/products/add/ProductInformation'
import ProductImage from '@views/products/add/ProductImage'
import ProductVariants from '@views/products/add/ProductVariants'
import ProductInventory from '@views/products/add/ProductInventory'
import ProductPricing from '@views/products/add/ProductPricing'
import ProductOrganize from '@views/products/add/ProductOrganize'
import { useMutation } from '@apollo/client'
import { ADD_PRODUCT, IMGAE_UPLOAD } from '@/graphql/mutations'
import { useState } from 'react'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { AlertTitle, Box } from '@mui/material'
import { uploadFile } from '@/utils/helper'
import { useRouter } from 'next/navigation'
const eCommerceProductsAdd = () => {
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
  const [addProduct] = useMutation(ADD_PRODUCT)
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)

  const handleAddProduct = async () => {
    setLoading(true)
    let errObj = {}
    let isErrExit = false
    if (!title) {
      errObj.title = 'Title field is required'
      isErrExit = true
    }
    if (!title) {
      errObj.title = 'Title field is required'
      isErrExit = true
    }
    // if (!price) {
    //   errObj.price = 'Price field is required'
    //   isErrExit = true
    // }
    if (!dealerPrice) {
      errObj.dealerPrice = 'Dealer Price field is required'
      isErrExit = true
    }
    if (!consumerPrice) {
      errObj.consumerPrice = 'Consumer Price field is required'
      isErrExit = true
    }
    if (!sNo) {
      errObj.sNo = 'Serial Number field is required'
      isErrExit = true
    }
    if (!warrantyPeriod) {
      errObj.warrantyPeriod = 'Warranty Period field is required'
      isErrExit = true
    }
    if (!brandId) {
      errObj.brandId = 'Brand field is required'
      isErrExit = true
    }
    if (!catId) {
      errObj.catId = 'Category field is required'
      isErrExit = true
    }
    // if (!sNo) {
    //   errObj.sNo = 'Serial Number field is required'
    //   isErrExit = true
    // }
    if (isErrExit) {
      setErrors({ ...errObj })
      setLoading(false)
      return
    }
    try {
      const productMediaUrls = await Promise.all(
        productMedia.map(async item => {
          const uploadUrl = await getFileUploadUrl({
            variables: {
              // content_type: item.type.split('/')[0],
              content_type: 'image',
              folder: 'products'
            }
          })

          const fileUrl = await uploadFile(item, uploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image')

          return {
            media_type: 'image',
            media_url: fileUrl
            // width: item.width,
            // height: item.height
          }
        })
      )

      const res = await addProduct({
        variables: {
          title: title,
          description_html: description,
          brand_id: brandId,
          category_id: catId,
          serial_number: sNo,
          warranty_period: warrantyPeriod,
          // price: Number(price),
          dealer_price: Number(dealerPrice),
          consumer_price: Number(consumerPrice),
          product_medias: {
            data: productMediaUrls
          }
        }
      })
      // router.back()
      setLoading(false)
      setTitle('')
      // setPrice('')
      setDescription('')
      setSNo('')
      setDealerPrice('')
      setConsumerPrice('')
      // setWarrantyPeriod('')
      setBrandId('')
      setCatId('')
      setGlobalMsg('➕ Add New Product')
    } catch (err) {
      setGlobalMsg('❌ Add Product Error')
      console.log(err.response)
    }
  }

  const handleDiscardProduct = () => {
    setTitle('')
    setDescription('')
    // setPrice('')
    setSNo('')
    setDealerPrice('')
    setConsumerPrice('')
    setWarrantyPeriod('')
    setBrandId()
    setProductMedia([])
  }
  if (loading) {
    return <Box sx={{ textAlign: 'center' }}>Loading...</Box>
  }
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ProductAddHeader handleDiscardProduct={handleDiscardProduct} handleAddProduct={handleAddProduct} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <ProductInformation
                setTitle={setTitle}
                title={title}
                setSNo={setSNo}
                sNo={sNo}
                warrantyPeriod={warrantyPeriod}
                setWarrantyPeriod={setWarrantyPeriod}
                setDescription={setDescription}
                description={description}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <ProductImage files={productMedia} setFiles={setProductMedia} />
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
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Alert />
    </>
  )
}

export default eCommerceProductsAdd
