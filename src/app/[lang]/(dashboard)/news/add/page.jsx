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
import { ADD_NEWS } from '@/graphql/mutations'
import { useState } from 'react'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

const eCommerceProductsAdd = () => {
  // const router = useRouter()
  const { setGlobalMsg, loading, setLoading } = useApp()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [catId, setCatId] = useState()
  const [errors, setErrors] = useState()
  const [addNews] = useMutation(ADD_NEWS)
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
      await addNews({
        variables: {
          data: {
            title: title,
            body_html: 'description',
            news_category_id: catId
          }
        }
      })
      // router.back()
      setLoading(false)
      setTitle('')

      setDescription('')

      setCatId('')
      setGlobalMsg('➕ Add New News')
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
              <NewImage />
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
              <NewsOrganize catId={catId} setCatId={setCatId} errors={errors} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Alert />
    </>
  )
}

export default eCommerceProductsAdd
