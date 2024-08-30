'use client'
// MUI Imports

import Grid from '@mui/material/Grid'

// Component Imports

import NewInformation from '@views/news/edit/NewsInformation'
import NewsAddHeader from '@views/news/edit/NewsAddHeader'
import NewImage from '@views/news/edit/NewsImage'
import NewsVariants from '@views/news/edit/NewsVariants'
import NewsInventory from '@views/news/edit/NewsInventory'
import NewsPricing from '@views/news/edit/NewsPricing'
import NewsOrganize from '@views/news/edit/NewsOrganize'
import { useMutation, useSubscription, useSuspenseQuery } from '@apollo/client'
import { ADD_NEWS, ADD_NEWS_PRODUCTS, DELETE_NEW_RELATED_PRODUCTS, EDIT_NEWS, IMGAE_UPLOAD } from '@/graphql/mutations'
import { useEffect, useState } from 'react'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { uploadFile } from '@/utils/helper'
import { useParams } from 'next/navigation'
import { NEW_BY_ID } from '@/graphql/queries'
import ReactHtmlParser from 'react-html-parser'
const EditNews = () => {
  const { id } = useParams()
  // const router = useRouter()
  const { setGlobalMsg, loading, setLoading } = useApp()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [catId, setCatId] = useState()
  const [image, setImage] = useState([])
  const [productId, setProductId] = useState([])
  const [errors, setErrors] = useState()
  const [editNews] = useMutation(EDIT_NEWS)
  const [addNewProduct] = useMutation(ADD_NEWS_PRODUCTS)
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)
  const { data } = useSuspenseQuery(NEW_BY_ID, { variables: { id: id } })
  const newData = data.news_by_pk
  const [deletNewsRelatedProducts] = useMutation(DELETE_NEW_RELATED_PRODUCTS)

  useEffect(() => {
    if (newData) {
      setTitle(newData.title)
      setDescription(ReactHtmlParser(newData.body_html)[0]?.props?.children[0])
    }
  }, [newData])

  const handleEditNews = async () => {
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
      let uploadedFileUrl = newData.image_url

      if (image && image !== newData?.image_url) {
        const { data: uploadData } = await getFileUploadUrl({
          variables: { content_type: 'image', folder: 'products' }
        })
        uploadedFileUrl = await uploadFile(fileName, uploadData.getFileUploadUrl.fileUploadUrl, 'image')
      }
      const result = await editNews({
        variables: {
          id: newData.id,
          data: {
            title: title,
            body_html: description,
            news_category_id: catId,
            image_url: uploadedFileUrl
          }
        }
      })

      await deletNewsRelatedProducts({ variables: { news_id: result.data.update_news_by_pk.id } })
      productId.map(
        async p =>
          await addNewProduct({
            variables: {
              data: {
                news_id: result?.data?.update_news_by_pk.id,
                product_id: p.id ? p.id : p
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
      setGlobalMsg('✅ New pos has been updated')
    } catch (err) {
      setGlobalMsg('❌ Add News Error')
      console.log(err.response)
    }
  }

  const handleDiscardProduct = () => {
    setTitle('')
    setDescription('')
    setCatId('')
  }
  if (loading) {
    return <Box sx={{ textAlign: 'center' }}>Loading...</Box>
  }

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <NewsAddHeader handleDiscardProduct={handleDiscardProduct} handleEditNews={handleEditNews} />
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
              <NewImage files={image} setFiles={setImage} newData={newData} />
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
                newData={newData}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Alert />
    </>
  )
}

export default EditNews
