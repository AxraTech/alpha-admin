'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'
import { useSuspenseQuery } from '@apollo/client'
import { PRODUCT_BRANDs, PRODUCT_CATS } from '@/graphql/queries'
import { Checkbox, FormHelperText } from '@mui/material'

const ProductOrganize = ({ status, setStatus, brandId, setBrandId, catId, setCatId, errors, productData }) => {
  const { data: brands } = useSuspenseQuery(PRODUCT_BRANDs)
  const { data: cats } = useSuspenseQuery(PRODUCT_CATS)

  useEffect(() => {
    if (productData) {
      const selectedCategory = cats?.product_categories.find(cat => cat.id === productData.product_category.id)
      setCatId(selectedCategory || null)
    }
  }, [productData, cats])

  return (
    <Card>
      <CardHeader title='Organize' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
          {brandId && (
            <FormControl fullWidth>
              <InputLabel>Select Product Brand</InputLabel>
              <Select
                label='Select Vendor'
                value={brandId}
                onChange={e => setBrandId(e.target.value)}
                error={errors?.brandId ? true : false}
                helpertext={errors?.brandId}
              >
                {brands?.brands?.map((brand, index) => (
                  <MenuItem value={brand?.id} key={index}>
                    {brand?.title}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ color: 'red' }}>{errors?.brandId}</FormHelperText>
            </FormControl>
          )}
          {/* {catId ? (
            <Autocomplete
              //value={catId}
              // onChange={(event, newValue) => {
              //   if (newValue) {
              //     setCatId(newValue?.id)
              //   } else {
              //     setCatId(null)
              //   }
              // }}
              value={catId}
              onChange={(_event, newValue) => {
                setCatId(newValue?.id || null) // Set the selected object or null
              }}
              className='overflow-y-auto h-[40vh]'
              id='checkboxes-tags-demo'
              options={cats?.product_categories || []}
              disableCloseOnSelect
              getOptionLabel={options => options?.title || ''}
              renderOption={(props, option, { selected }) => (
                <li {...props} key={option.id}>
                  {option.title}
                </li>
              )}
              renderInput={params => <TextField {...params} label='Category' placeholder='select category' />}
            />
          ) : (
            <Autocomplete
              //value={catId}
              // onChange={(event, newValue) => {
              //   if (newValue) {
              //     setCatId(newValue?.id)
              //   } else {
              //     setCatId(null)
              //   }
              // }}
              value={''}
              onChange={(event, newValue) => {
                setCatId(newValue || null)
              }}
              className='overflow-y-auto h-[40vh]'
              id='checkboxes-tags-demo'
              options={cats?.product_categories || []}
              disableCloseOnSelect
              getOptionLabel={options => options?.title || ''}
              renderOption={(props, option, { selected }) => (
                <li {...props} key={option.id}>
                  {option.title}
                </li>
              )}
              renderInput={params => <TextField {...params} label='Category' placeholder='select category' />}
            />
          )} */}
          <Autocomplete
            value={catId || null}
            onChange={(_event, newValue) => {
              setCatId(newValue || null) // Ensure the selected object is passed, or null
            }}
            className='overflow-y-auto h-[40vh]'
            id='checkboxes-tags-demo'
            options={cats?.product_categories || []}
            disableCloseOnSelect
            getOptionLabel={option => option?.title || ''}
            renderOption={(props, option, { selected }) => (
              <li {...props} key={option.id}>
                {option.title}
              </li>
            )}
            renderInput={params => <TextField {...params} label='Category' placeholder='Select category' />}
          />
        </form>
      </CardContent>
    </Card>
  )
}

export default ProductOrganize
