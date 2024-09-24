'use client'

import { useState } from 'react'
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
import { NEWS_CATS, PRODUCT_SELECT } from '@/graphql/queries'

const NewsOrganize = ({ productId, setProductId, catId, setCatId, errors }) => {
  const { data: cats } = useSuspenseQuery(NEWS_CATS)
  const { data: products } = useSuspenseQuery(PRODUCT_SELECT)

  return (
    <Card>
      <CardHeader title='Organize' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
          {/* <div className='flex items-center gap-4'> */}
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

          <Autocomplete
            multiple
            value={productId}
            onChange={(event, newValue) => {
              setProductId(newValue)
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
            // renderInput={params => <TextField {...params} label='Products' placeholder='select products' />}
            // error={errors?.title ? true : false}
            // helperText={errors?.title}
            renderInput={params => (
              <TextField
                {...params}
                label='Products'
                placeholder='Select products'
                error={errors?.productId ? true : false}
                helperText={errors?.productId}
              />
            )}
          />
          {console.log('error productid ', errors)}
          {/* </div> */}
        </form>
      </CardContent>
    </Card>
  )
}

export default NewsOrganize
