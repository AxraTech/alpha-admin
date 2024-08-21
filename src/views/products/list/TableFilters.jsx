// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useSuspenseQuery } from '@apollo/client'
import { PRODUCT_CATS } from '@/graphql/queries'

// Vars
const productStockObj = {
  'In Stock': true,
  'Out of Stock': false
}

const TableFilters = ({ setData, productData }) => {
  // States
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState('')
  const [status, setStatus] = useState('')
  const { data: catProducts } = useSuspenseQuery(PRODUCT_CATS)

  useEffect(
    () => {
      const filteredData = productData?.filter(product => {
        if (category && product.product_category.title !== category) return false
        if (stock && product.stock !== productStockObj[stock]) return false
        if (status && product.disabled !== status) return false

        return true
      })

      setData(filteredData ?? [])
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, stock, status, productData]
  )

  return (
    <CardContent>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id='status-select'>Status</InputLabel>
            <Select
              fullWidth
              id='select-status'
              label='Status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              labelId='status-select'
            >
              <MenuItem value=''>Select Status</MenuItem>
              <MenuItem value='true'>Enabled</MenuItem>
              <MenuItem value='false'>Disabled</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id='category-select'>Category</InputLabel>
            <Select
              fullWidth
              id='select-category'
              value={category}
              onChange={e => setCategory(e.target.value)}
              label='Category'
              labelId='category-select'
            >
              <MenuItem value=''>Select Category</MenuItem>
              {catProducts.product_categories.map(cats => (
                <MenuItem value={cats.title} key={cats.id}>
                  {cats.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id='stock-select'>Stock</InputLabel>
            <Select
              fullWidth
              id='select-stock'
              value={stock}
              onChange={e => setStock(e.target.value)}
              label='Stock'
              labelId='stock-select'
            >
              <MenuItem value=''>Select Stock</MenuItem>
              <MenuItem value='In Stock'>In Stock</MenuItem>
              <MenuItem value='Out of Stock'>Out of Stock</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
      </Grid>
    </CardContent>
  )
}

export default TableFilters
