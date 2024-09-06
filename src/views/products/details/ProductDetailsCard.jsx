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

const productData = [
  {
    productName: 'OnePlus 7 Pro',
    productImage: '/images/apps/ecommerce/product-21.png',
    brand: 'OnePluse',
    price: 799,
    quantity: 1,
    total: 799
  },
  {
    productName: 'Magic Mouse',
    productImage: '/images/apps/ecommerce/product-22.png',
    brand: 'Google',
    price: 89,
    quantity: 1,
    total: 89
  },
  {
    productName: 'Wooden Chair',
    productImage: '/images/apps/ecommerce/product-23.png',
    brand: 'Insofar',
    price: 289,
    quantity: 2,
    total: 578
  },
  {
    productName: 'Air Jorden',
    productImage: '/images/apps/ecommerce/product-24.png',
    brand: 'Nike',
    price: 299,
    quantity: 2,
    total: 598
  }
]

// Column Definitions
const columnHelper = createColumnHelper()

const OrderTable = ({ productData }) => {
  // States

  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[productData.order_items])
  const [globalFilter, setGlobalFilter] = useState('')

  const columns = useMemo(
    () => [
      // {
      //   id: 'select',
      //   header: ({ table }) => (
      //     <Checkbox
      //       {...{
      //         checked: table.getIsAllRowsSelected(),
      //         indeterminate: table.getIsSomeRowsSelected(),
      //         onChange: table.getToggleAllRowsSelectedHandler()
      //       }}
      //     />
      //   ),
      //   cell: ({ row }) => (
      //     <Checkbox
      //       {...{
      //         checked: row.getIsSelected(),
      //         disabled: !row.getCanSelect(),
      //         indeterminate: row.getIsSomeSelected(),
      //         onChange: row.getToggleSelectedHandler()
      //       }}
      //     />
      //   )
      // },

      columnHelper.accessor('title', {
        header: 'Product',
        cell: ({ row }) => (
          <div className='flex items-center gap-3 text-wrap'>
            {/* <img src={row.original.productImage} alt={row.original.productName} height={34} className='rounded' /> */}

            <div className='flex flex-col items-start  '>
              <Typography color='text.primary' className='font-medium w-60 text-wrap'>
                {row.original.product.title}
              </Typography>
              <Typography variant='body2'>{row.original.product.brand.title}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('order_items?.unit_price', {
        header: 'Price',
        cell: ({ row }) => <Typography>{`${row.original.unit_price.toLocaleString()}`} Ks</Typography>
      }),
      columnHelper.accessor('quantity', {
        header: 'Qty',
        cell: ({ row }) => <Typography>{`${row.original.quantity}`}</Typography>
      }),
      columnHelper.accessor('total', {
        header: 'Total',
        cell: ({ row }) => <Typography>{`${row.original.total?.toLocaleString()}`} Ks</Typography>
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <div className='overflow-x-auto'>
      <table className={tableStyles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <>
                      <div
                        className={classnames({
                          'flex items-center': header.column.getIsSorted(),
                          'cursor-pointer select-none': header.column.getCanSort()
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <i className='ri-arrow-up-s-line text-xl' />,
                          desc: <i className='ri-arrow-down-s-line text-xl' />
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {table.getFilteredRowModel().rows?.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                No data available
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className='border-be'>
            {table
              .getRowModel()
              .rows.slice(0, table.getState().pagination.pageSize)
              .map(row => {
                return (
                  <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className='first:is-14'>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        )}
      </table>
    </div>
  )
}

const DiscountDetailsCard = ({ productData }) => {
  const [loading, setLoading] = useState(false)
  const [discountOpen, setDiscountOpen] = useState(false)
  const [data, setData] = useState(productData)
  console.log('data ', data)
  return (
    <>
      <Card>
        <CardHeader
          title='Product Details'
          action={
            <Button
              variant='contained'
              className='max-sm:is-full is-auto'
              onClick={() => setDiscountOpen(!discountOpen)}
              startIcon={<i className='ri-add-line' />}
            >
              Discount
            </Button>
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
                {productData.serial_number}
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

        <AddDiscountDrawer
          open={discountOpen}
          discountData={productData}
          setData={setData}
          loading={loading}
          setLoading={setLoading}
          handleClose={() => setDiscountOpen(!discountOpen)}
        />
      </Card>
      <DiscountListTable productData={data} />
    </>
  )
}

export default DiscountDetailsCard
