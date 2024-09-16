'use client'

// React Imports
import { useEffect, useMemo, useState } from 'react'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import EditDiscountDrawer from '../EditDiscountDrawer'
// Third-party Imports
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel,
  getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel,
  getSortedRowModel, useReactTable
} from '@tanstack/react-table'
import classnames from 'classnames'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import CustomAvatar from '@core/components/mui/Avatar'
// Util Imports
import { getInitials } from '@/utils/getInitials'

// Style Imports
import { DELETE_PRODUCT_DISCOUNT } from '@/graphql/mutations'
import {
  GET_ALL_PRODUCT_DISCOUNT, ORDER_STATUS
} from '@/graphql/queries'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import tableStyles from '@core/styles/table.module.css'

import { useApp } from '@/app/ApolloWrapper'
import Alert from '@/components/helper/Alert'
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

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

// Column Definitions
const columnHelper = createColumnHelper()

const DiscountListTable = ({ productData }) => {
  const { data: discountDatas } = useSuspenseQuery(GET_ALL_PRODUCT_DISCOUNT, {
    variables: { product_id: productData.id },
    fetchPolicy: 'network-only'
  })

  const { data: orderStatus } = useSuspenseQuery(ORDER_STATUS)

  // States
  const { setGlobalMsg } = useApp()
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[discountDatas.product_discounts])
  const [discountedData, setDiscountedData] = useState()
  const [filteredData, setFilteredData] = useState(data)
  const [globalFilter, setGlobalFilter] = useState('')
  const [editDiscountOpen, setEditDiscountOpen] = useState(false)
  const [deleteDiscount] = useMutation(DELETE_PRODUCT_DISCOUNT)

  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  const handleDelete = async id => {
    try {
      await deleteDiscount({ variables: { id: id } })
      setData(data.filter(item => item.id !== id))
      setGlobalMsg('✅ Delete Successful')
    } catch (e) {
      console.log('Error ', e)
    }
  }

  // Hooks
  const { lang: locale } = useParams()
console.log('data -----',data)
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
      columnHelper.accessor('id', {
        header: '#',
        cell: ({ row }) => (
          <Typography
            // component={Link}
            // href={getLocalizedUrl(`/products/discount/${row.original.id}`, locale)}
            color='primary'
          >{`${row.original.id.substring(0, 10)}`}</Typography>
        )
      }),

      columnHelper.accessor('min_order ', {
        header: 'Minimal Order',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            {/* <Avatar src={row.original.user.min_order} width='100px' height='100px' /> */}
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.min_order}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('customer_type ', {
        header: 'Customer Type',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.customer_type}
              </Typography>
            </div>
          </div>
        )
      }),
      // columnHelper.accessor('discount_type ', {
      //   header: 'Discount Type',
      //   cell: ({ row }) => (
      //     <div className='flex items-center gap-3'>
      //       <div className='flex flex-col'>
      //         <Typography className='font-medium' color='text.primary'>
      //           {row.original.discount_type}
      //         </Typography>
      //       </div>
      //     </div>
      //   )
      // }),

      columnHelper.accessor('discounted_value', {
        header: 'Discounted Value',
        cell: ({ row }) => (
          <Typography>{`${row.original.discounted_value !== null ? row.original.discounted_value.toLocaleString() : '-'}`}</Typography>
        )
      }),
      columnHelper.accessor('created_at', {
        header: 'Date',
        cell: ({ row }) => <Typography>{row.original.created_at.substring(0, 10)}</Typography>
      }),
      // columnHelper.accessor('discount_type', {
      //   header: 'Discount Type',
      //   cell: ({ row }) => (
      //     <div className='flex items-center gap-3'>
      //       <div className='flex flex-col'>
      //         {/* <Chip
      //           label={row.original.status}
      //           color={orderStatusColor[row.original.status]}
      //           style={{ textTransform: 'capitalize' }}
      //           variant='tonal'
      //           size='small'
      //         /> */}
      //       </div>
      //     </div>
      //   )
      // }),
      // columnHelper.accessor('issuedDate', {
      //   header: 'Issued Date',
      //   cell: ({ row }) => <Typography>{row.original.issuedDate}</Typography>
      // }),

      columnHelper.accessor('action', {
        header: 'Action',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps(<i className='ri-delete-bin-7-line text-[22px] text-red-500' />, 'error', '')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'deleteProductDiscount' }}
              dataId={row.original.id}
              setData={setData}
              data={data}
            />
            <IconButton
              onClick={() => {
                setDiscountedData(row.original)
                setEditDiscountOpen(true)
              }}
            >
              <i className='ri-pencil-line' />
            </IconButton>
            {/* <IconButton>
              <Link href={getLocalizedUrl(`/products/discount/details/${row.original.id}`, locale)} className='flex'>
                <i className='ri-eye-line text-textSecondary' />
              </Link>
            </IconButton> */}
            {/* <OptionMenu
              iconButtonProps={{ size: 'medium' }}
              iconClassName='text-textSecondary'
              options={[
                {
                  text: 'Download',
                  icon: 'ri-download-line',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                },
                {
                  text: 'Edit',
                  icon: 'ri-pencil-line',
                  href: getLocalizedUrl(`/invoice/edit/${row.original.id}`, locale),
                  linkProps: {
                    className: 'flex items-center is-full plb-2 pli-4 gap-2 text-textSecondary'
                  }
                },
                {
                  text: 'Duplicate',
                  icon: 'ri-file-copy-line',
                  menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                }
              ]}
            /> */}
          </div>
        ),
        enableSorting: false
      })
    ],

    [data, filteredData]
  )

  const table = useReactTable({
    data: filteredData,
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

  const getAvatar = params => {
    const { avatar, name } = params

    if (avatar) {
      return <CustomAvatar src={avatar} skin='light' size={34} />
    } else {
      return (
        <CustomAvatar skin='light' size={34}>
          {getInitials(name)}
        </CustomAvatar>
      )
    }
  }

  useEffect(() => {
    const filteredData = data?.filter(invoice => {
      if (status && invoice.status.toLowerCase().replace(/\s+/g, '-') !== status) return false

      return true
    })

    setFilteredData(filteredData)
  }, [status, data, setFilteredData])

  return (
    <>
      <Card>
        <CardContent className='flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center'>
          <div className='flex flex-col sm:flex-row max-sm:is-full items-center gap-4'>
            <DebouncedInput
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              placeholder='Search Product Discount'
              className='max-sm:is-full min-is-[200px]'
            />
            {/* <FormControl fullWidth size='small' className='min-is-[175px]'>
              <InputLabel id='status-select'>Quotation Status</InputLabel>
              <Select
                fullWidth
                id='select-status'
                value={status}
                onChange={e => setStatus(e.target.value)}
                label='Invoice Status'
                labelId='status-select'
              >
                <MenuItem value=''>none</MenuItem>
                {orderStatus.order_status.map(s => (
                  <MenuItem value={s.name} key={s.id}>
                    {s.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </div>
        </CardContent>
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
            {table.getFilteredRowModel().rows.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    No data available
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, table.getState().pagination.pageSize)
                  .map(row => {
                    return (
                      <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        ))}
                      </tr>
                    )
                  })}
              </tbody>
            )}
          </table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          className='border-bs'
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' }
          }}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
          onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
        />
      </Card>
      <Alert />

      <EditDiscountDrawer
        open={editDiscountOpen}
        discountData={discountedData}
        setData={setData}
        loading={loading}
        setLoading={setLoading}
        handleClose={() => setEditDiscountOpen(!editDiscountOpen)}
      />
    </>
  )
}

export default DiscountListTable
