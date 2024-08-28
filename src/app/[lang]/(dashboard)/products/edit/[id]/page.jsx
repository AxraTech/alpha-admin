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
import { useState } from 'react'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { AlertTitle, Box } from '@mui/material'
import { uploadFile } from '@/utils/helper'
import { useParams } from 'next/navigation'
import { PRODUCTS_BY_ID } from '@/graphql/queries'
const EditProducts = () => {
  const { id } = useParams()
  const { setGlobalMsg, loading, setLoading } = useApp()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [brandId, setBrandId] = useState()
  const [catId, setCatId] = useState()
  const [price, setPrice] = useState()
  const [sNo, setSNo] = useState()
  const [errors, setErrors] = useState()
  const [productMedia, setProductMedia] = useState([])
  const [addProduct] = useMutation(EDIT_RPODUCTS)
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)
  const { data } = useSuspenseQuery(PRODUCTS_BY_ID, { variables: { id: id } })

  const productData = data.products_by_pk

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
    if (!price) {
      errObj.price = 'Price field is required'
      isErrExit = true
    }
    if (!sNo) {
      errObj.sNo = 'Serial Number field is required'
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

      await addProduct({
        variables: {
          id: productData.id,
          title: title,
          description_html: description,
          brand_id: brandId,
          category_id: catId,
          serial_number: sNo,
          price: price,
          product_medias: {
            data: productMediaUrls
          }
        }
      })
      setLoading(false)
      setTitle('')
      setPrice('')
      setDescription('')
      setSNo('')
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
    setPrice(0)
    setSNo(0)
    setCatId('')
    setBrandId('')
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
            handleAddProduct={handleAddProduct}
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
              <ProductPricing price={price} setPrice={setPrice} errors={errors} productData={productData} />
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
