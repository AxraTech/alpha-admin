'use client'
// MUI Imports

import Grid from '@mui/material/Grid'

// Component Imports

import NewInformation from '@views/news/add/NewsInformation'
import NewsAddHeader from '@views/news/add/NewsAddHeader'
import NewImage from '@views/news/add/NewsImage'
import NewsVariants from '@views/news/add/NewsVariants'
import NewsInventory from '@views/news/add/NewsInventory'
import NewsPricing from '@views/news/add/NewsPricing'
import NewsOrganize from '@views/news/add/NewsOrganize'
import { useMutation } from '@apollo/client'
import { ADD_NEWS, ADD_NEWS_PRODUCTS, IMGAE_UPLOAD } from '@/graphql/mutations'
import { useState } from 'react'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { uploadFile } from '@/utils/helper'
import { GET_NEWS } from '@/graphql/queries'

const eCommerceProductsAdd = () => {
  // const router = useRouter()
  const { setGlobalMsg, loading, setLoading } = useApp()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [catId, setCatId] = useState()
  const [image, setImage] = useState([])
  const [productId, setProductId] = useState([])
  const [errors, setErrors] = useState()
  const [addNews] = useMutation(ADD_NEWS, { refetchQueries: [GET_NEWS] })
  const [addNewProduct] = useMutation(ADD_NEWS_PRODUCTS)
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)

  const handleaddNews = async () => {
    setLoading(true)
    let errObj = {}
    let isErrExit = false
    if (!title) {
      errObj.title = 'Title field is required'
      isErrExit = true
    }
    // if (!description) {
    //   errObj.description = 'Body field is required'
    //   isErrExit = true
    // }

    if (!catId) {
      errObj.catId = 'Category field is required'
      isErrExit = true
    }
    if (!productId) {
      errObj.productId = 'Product field is required'
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
      const fileUploadUrl = await getFileUploadUrl({
        variables: {
          content_type: 'image',
          folder: 'news'
        }
      })

      const uploadedFileUrl = await uploadFile(image[0], fileUploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image')

      const result = await addNews({
        variables: {
          data: {
            title: title,
            body_html: description,
            news_category_id: catId,
            image_url: uploadedFileUrl
          }
        }
      })
      productId.map(
        async p =>
          await addNewProduct({
            variables: {
              data: {
                news_id: result?.data?.insert_news_one.id,
                product_id: p.id
              }
            }
          })
      )
      // router.back()
      setLoading(false)
      setTitle('')
      setDescription('')
      setProductId([])
      setCatId('')
      setGlobalMsg('➕ Add New Post')
    } catch (err) {
      setGlobalMsg('❌ Add News Error')
      console.log(err.response)
    }
  }

  const handleDiscardProduct = () => {
    setTitle('')
    setDescription('')
    setCatId('')
    // setImage('')
    setProductId([])
  }
  if (loading) {
    return <Box sx={{ textAlign: 'center' }}>Loading...</Box>
  }

  // console.log('product id ', productId)
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <NewsAddHeader handleDiscardProduct={handleDiscardProduct} handleaddNews={handleaddNews} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <NewInformation
                setTitle={setTitle}
                title={title}
                setDescription={setDescription}
                description={description}
                errors={errors}
              />
            </Grid>

            <Grid item xs={12}>
              <NewImage files={image} setFiles={setImage} />
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
              <NewsOrganize
                catId={catId}
                setCatId={setCatId}
                productId={productId}
                setProductId={setProductId}
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
