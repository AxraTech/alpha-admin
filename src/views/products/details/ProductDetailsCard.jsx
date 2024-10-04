'use client'

// React Imports
import { useState, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

// Component Imports
import Link from '@components/Link'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import { Button } from '@mui/material'
import AddDiscountDrawer from '../discount/AddDiscountDrawer'
import DiscountListTable from '../discount/list/DiscountListTable'
import { GET_ALL_PRODUCT_DISCOUNT } from '@/graphql/queries'
import { useSuspenseQuery } from '@apollo/client'
import ProductInformation from '../add/ProductInformation'

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

// Column Definitions
const columnHelper = createColumnHelper()

const DiscountDetailsCard = ({ productData }) => {
  // const [loading, setLoading] = useState(false)
  // const [discountOpen, setDiscountOpen] = useState(false)

  // const { data: discountData } = useSuspenseQuery(GET_ALL_PRODUCT_DISCOUNT, {
  //   variables: { product_id: productData.id },
  //   fetchPolicy: 'network-only'
  // })

  // const [data, setData] = useState(...[discountData.product_discounts])

  return (
    <>
      <Card>
        <CardHeader
          title='Product Details'
          action={
            <>
              {/* <Button
                variant='contained'
                className='max-sm:is-full is-auto'
                onClick={() => setDiscountOpen(!discountOpen)}
                startIcon={<i className='ri-add-line' />}
              >
                Disable
              </Button> */}
            </>
          }
        />
        {/* <OrderTable productData={productData} /> */}
        <CardContent className='flex '>
          <div>
            <div className='flex items-center gap-12 '>
              <Typography color='text.primary' className='min-is-[100px]'>
                Name :
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {productData?.title}
              </Typography>
            </div>

            <div className='flex items-center gap-12 mt-3'>
              <Typography color='text.primary' className='min-is-[100px]'>
                Brand :
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {productData?.brand?.title}
              </Typography>
            </div>
            <div className='flex items-center gap-12 mt-3'>
              <Typography color='text.primary' className='min-is-[100px]'>
                Serial Number :
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {productData?.serial_number}
              </Typography>
            </div>
            {/* warranty_period */}
            <div className='flex items-center gap-12 mt-3'>
              <Typography color='text.primary' className='min-is-[100px]'>
                Warranty Period :
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {productData?.warranty_period}
              </Typography>
            </div>

            {/* <div className='flex items-center gap-12'>
            <Typography color='text.primary' className='min-is-[100px]'>
              Tax:
            </Typography>
            <Typography color='text.primary' className='font-medium'>
              $28
            </Typography>
          </div> */}
            <div className='flex items-center gap-12 mt-3'>
              <Typography color='text.primary' className='font-medium min-is-[100px]'>
                Category :
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {productData?.product_category?.title}
              </Typography>
            </div>
            <div className='flex items-center gap-12 mt-3'>
              <Typography color='text.primary' className='min-is-[100px]'>
                Description :
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {productData?.description}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <DiscountListTable discountDatas={data} /> */}
    </>
  )
}

export default DiscountDetailsCard
