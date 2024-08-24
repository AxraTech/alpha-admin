'use client'

// React Imports
import { useState, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
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
import { Button, TextField } from '@mui/material'
import { useMutation } from '@apollo/client'
import { IS_WARRANTY_VALID } from '@/graphql/mutations'
import Alert from '@/components/helper/Alert'
import { useApp } from '@/app/ApolloWrapper'
import { check } from 'valibot'

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

const OrderTable = ({ serviceData }) => {
  // States

  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[serviceData.serice_tokens])
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
        // size: '200px',
        cell: ({ row }) => (
          <div className='flex items-center gap-3 ' style={{ width: '200px' }}>
            {/* <img src={row.original.productImage} alt={row.original.productName} height={34} className='rounded' /> */}

            <div className='flex flex-col items-start  '>
              <Typography color='text.primary' className='font-medium '>
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

const ServiceDetailsCard = ({ serviceData }) => {
  const { setGlobalMsg } = useApp()
  const [checked, setChecked] = useState(serviceData.is_warranty_valid ? true : false)
  const [serviceFee, setServiceFee] = useState()
  const [errors, setErrors] = useState()
  const [isWarrantyValid] = useMutation(IS_WARRANTY_VALID)
  const handleValidOn = event => {
    setChecked(event.target.checked)
  }
  const handleValidOff = async data => {
    try {
      if (serviceFee) {
        await isWarrantyValid({
          variables: {
            id: data.id,
            data: {
              is_warranty_valid: false,
              service_fee: serviceFee
            }
          }
        })
        setServiceFee('')
        setGlobalMsg('➕ Added service fee')
      } else {
        setGlobalMsg('⚠️ Please fill service fee')
      }
    } catch (e) {
      console.log('Error ', e)
    }
  }
  return (
    <>
      <Card>
        <CardHeader
          title='Service Details'
          action={
            // <Typography component={Link} color='primary.main' className='font-medium'>
            //   Edit
            // </Typography>
            <>
              {serviceData.is_warranty_valid && checked ? (
                <Switch checked={checked} onChange={handleValidOn} inputProps={{ 'aria-label': 'controlled' }} />
              ) : (
                <>
                  {checked !== true ? (
                    <>
                      <TextField
                        size='small'
                        type='number'
                        required
                        sx={{ width: '150px', mr: '1rem' }}
                        value={serviceFee}
                        error={serviceFee ? false : true}
                        helperText={`${!serviceFee ? 'This field is required' : ''}`}
                        onChange={e => setServiceFee(e.target.value)}
                      />
                      <Button variant='contained' onClick={() => handleValidOff(serviceData)}>
                        Add service fee
                      </Button>
                    </>
                  ) : (
                    ''
                  )}
                </>
              )}
            </>
          }
        />
        {/* <OrderTable serviceData={serviceData} /> */}
        <CardContent className='flex  flex-col'>
          <div>
            <div className='flex items-center gap-12'>
              <Typography color='text.primary' className='min-is-[100px]'>
                Description:
              </Typography>
              <Typography color='text.primary' className='font-medium'>
                {serviceData.description}
              </Typography>
            </div>
          </div>
          <br />
          <div className='flex justify-center gap-x-12'>
            <div>
              <img src={serviceData.document_photo_url} alt='image' width={50} height='auto' />
              <Typography color='text.primary' className=' min-is-[100px]'>
                Document Photo
              </Typography>
            </div>
            <div>
              {serviceData.issue_media_type === 'image' ? (
                <>
                  <img src={serviceData.issue_media_url} alt='image' width={50} height='auto' />
                  <Typography color='text.primary' className='min-is-[100px]'>
                    Issue Image
                  </Typography>
                </>
              ) : (
                <>
                  <video src={serviceData.issue_media_url} alt='image' width={50} height='auto' />
                  <Typography color='text.primary' className='min-is-[100px]'>
                    Issue Video
                  </Typography>
                </>
              )}
            </div>
          </div>
          <br />
          <div></div>
        </CardContent>
      </Card>
      <Alert />
    </>
  )
}

export default ServiceDetailsCard
