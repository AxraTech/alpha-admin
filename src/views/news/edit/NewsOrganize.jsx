'use client'

import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Autocomplete from '@mui/material/Autocomplete'
import FormHelperText from '@mui/material/FormHelperText'

import { CustomIconButton } from '@core/components/mui/IconButton'
import { useSuspenseQuery } from '@apollo/client'
import { NEWS_CATS, NEWS_RELATED_PRODUCTS, PRODUCT_SELECT } from '@/graphql/queries'

const NewsOrganize = ({ productId, setProductId, catId, setCatId, errors, newData }) => {
  const { data: cats } = useSuspenseQuery(NEWS_CATS)
  const { data: products } = useSuspenseQuery(PRODUCT_SELECT)
  const { data: newsRelatedProducts } = useSuspenseQuery(NEWS_RELATED_PRODUCTS, { variables: { news_id: newData?.id } })

  useEffect(() => {
    if (newData) {
      setCatId(newData.news_category?.id)
      setProductId(newsRelatedProducts && newsRelatedProducts?.news_related_products?.map(item => item?.product_id))
    }
  }, [newData, setCatId, setProductId])

  return (
    <Card>
      <CardHeader title='Organize' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
          {/* <div className='flex items-center gap-4'> */}

          {catId && (
            <FormControl fullWidth>
              <InputLabel>Select News Category</InputLabel>
              <Select
                label='Select Category'
                value={catId}
                onChange={e => setCatId(e.target.value)}
                error={errors?.catId}
              >
                {cats?.news_categories?.map((cat, index) => (
                  <MenuItem value={cat?.id} key={index}>
                    {cat?.title}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: 'red' }}>{errors?.catId}</FormHelperText>
            </FormControl>
          )}

          <Autocomplete
            multiple
            // value={productId}
            value={products?.products?.filter(product => productId.includes(product.id)) || []}
            // onChange={(event, newValue) => {
            //   setProductId(newValue)
            // }}
            onChange={(event, newValue) => {
              // When products are selected or removed, update the productId state
              setProductId(newValue.map(product => product.id))
            }}
            // inputValue={inputValue}
            // onInputChange={(event, newInputValue) => {
            //   setInputValue(newInputValue)
            // }}
            className='overflow-y-auto h-[40vh]'
            id='checkboxes-tags-demo'
            options={products?.products || []}
            disableCloseOnSelect
            getOptionLabel={options => options?.title || ''}
            renderOption={(props, option, { selected }) => (
              <li {...props} key={option.id}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.title}
              </li>
            )}
            renderInput={params => <TextField {...params} label='Products' placeholder='select products' />}
          />

          {/* </div> */}
        </form>
      </CardContent>
    </Card>
  )
}

export default NewsOrganize
