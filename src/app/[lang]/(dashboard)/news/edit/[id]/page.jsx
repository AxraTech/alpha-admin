'use client'
// MUI Imports
import Grid from '@mui/material/Grid'
import { useApp } from '@/app/ApolloWrapper'
import Alert from '@/components/helper/Alert'
import { ADD_NEWS_PRODUCTS, DELETE_NEW_RELATED_PRODUCTS, EDIT_NEWS, IMGAE_UPLOAD } from '@/graphql/mutations'
import { NEW_BY_ID } from '@/graphql/queries'
import { uploadFile } from '@/utils/helper'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { Box } from '@mui/material'
import NewsAddHeader from '@views/news/edit/NewsAddHeader'
import NewImage from '@views/news/edit/NewsImage'
import NewInformation from '@views/news/edit/NewsInformation'
import NewsOrganize from '@views/news/edit/NewsOrganize'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const EditNews = () => {
  const { id } = useParams()
  const router = useRouter()
  const { setGlobalMsg, loading, setLoading } = useApp()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [catId, setCatId] = useState()
  const [image, setImage] = useState([])
  const [productId, setProductId] = useState([])
  const [errors, setErrors] = useState()
  const [isImageChange, setIsImageChange] = useState(false)
  const [editNews] = useMutation(EDIT_NEWS)
  const [addNewProduct] = useMutation(ADD_NEWS_PRODUCTS)
  const [getFileUploadUrl] = useMutation(IMGAE_UPLOAD)
  const { data } = useSuspenseQuery(NEW_BY_ID, { variables: { id: id } })
  const newData = data.news_by_pk
  const [deletNewsRelatedProducts] = useMutation(DELETE_NEW_RELATED_PRODUCTS)

  useEffect(() => {
    if (newData) {
      setImage(newData.image_url)
      setTitle(newData.title)
      setDescription(newData.body_html)
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
        uploadedFileUrl = await uploadFile(image[0], uploadData.getFileUploadUrl.fileUploadUrl, 'image')
      }
      const result = await editNews({
        variables: {
          id: newData.id,
          data: {
            title: title,
            body_html: description,
            news_category_id: catId,
            image_url: image !== newData.image_url ? uploadedFileUrl : newData.image_url
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
      router.back()
      setLoading(false)
      setTitle('')
      setDescription('')
      setProductId([])
      setCatId('')
      setGlobalMsg('✅ New post has been updated')
    } catch (err) {
      setGlobalMsg('❌ Add News Error')
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
              <NewImage
                files={image}
                setFiles={setImage}
                newData={newData}
                isImageChange={isImageChange}
                setIsImageChange={setIsImageChange}
              />
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
