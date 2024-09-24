'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import TablePagination from '@mui/material/TablePagination'

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
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'
import { quotationstatusChipColor } from '@/components/helper/StatusColor'
// Util Imports
import { getInitials } from '@/utils/getInitials'
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { ORDER_STATUS, GET_ALL_EWARRANTIES } from '@/graphql/queries'
import { Avatar } from '@mui/material'
import { CHANGE_QUOTATION_STATUS } from '@/graphql/mutations'
import { orderStatusColor } from '@/components/helper/StatusColor'
import { CSVLink } from 'react-csv'
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
  console.log('value ', value)
  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

// Column Definitions
const columnHelper = createColumnHelper()
const headers = [
  { label: 'E-Warranty Number', key: 'ewarranty_number' },
  { label: 'User Name', key: 'user_name' },
  { label: 'Customer Name', key: 'customer_name' },
  { label: 'Customer Phone', key: 'customer_phone' },
  { label: 'Model Number', key: 'model_number' },
  { label: 'Serial Number', key: 'serial_number' },
  { label: 'Shop Name', key: 'shop_name' },
  { label: 'Created At', key: 'created_at' },
  { label: 'Updated At', key: 'updated_at' }
]

const OrderListTable = () => {
  const { data: warrantyDatas } = useSuspenseQuery(GET_ALL_EWARRANTIES)

  const { data: orderStatus } = useSuspenseQuery(ORDER_STATUS)

  // States
  const [status, setStatus] = useState('')
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[warrantyDatas.ewarranties])
  const [filteredData, setFilteredData] = useState(data)
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang: locale } = useParams()

  const temp = filteredData.map(item => ({
    ...item,
    ewarranty_number: item.ewarranty_number,
    customer_name: item.customer_name,
    user_name: item?.user?.name,
    customer_phone: item.customer_phone,
    model_number: item.model_number,
    serial_number: item.serial_number,
    shop_name: item.shop_name,
    created_at: new Date(item.created_at).toLocaleString(),
    updated_at: new Date(item.updated_at).toLocaleString()
  }))

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
      columnHelper.accessor('ewarranty_number', {
        header: 'E-Warranty Number',
        cell: ({ row }) => (
          <Typography
            component={Link}
            href={getLocalizedUrl(`/ewarranties/details/${row.original.id}`, locale)}
            color='primary'
          >{`${row.original?.ewarranty_number}`}</Typography>
        )
      }),

      columnHelper.accessor('user.name', {
        header: 'User Name',
        cell: ({ row }) => (
          <Typography>{`${row.original.user?.name !== null ? row.original?.user?.name : '-'}`}</Typography>
        )
      }),
      columnHelper.accessor('customer_name', {
        header: 'Customer Name',
        cell: ({ row }) => (
          <div className='flex items-center gap-4 '>
            <div className='flex flex-col  text-wrap'>
              <Typography className='font-medium' color='text.primary'>
                {row.original?.customer_name}
              </Typography>
              <Typography variant='body2'>{row.original?.customer_phone}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('model_number', {
        header: 'Model Number',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original?.model_number}
              </Typography>
            </div>
          </div>
        )
      }),

      columnHelper.accessor('serial_number', {
        header: 'Serial Number',
        cell: ({ row }) => (
          <Typography>{`${row.original.serial_number !== null ? row.original?.serial_number : '-'}`}</Typography>
        )
      }),
      columnHelper.accessor('created_at', {
        header: 'Date',
        cell: ({ row }) => <Typography>{new Date(row.original.created_at)?.toLocaleString()}</Typography>
      }),

      columnHelper.accessor('action', {
        header: 'Action',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <IconButton>
              <Link href={getLocalizedUrl(`/ewarranties/details/${row.original?.id}`, locale)} className='flex'>
                <i className='ri-eye-line text-textSecondary' />
              </Link>
            </IconButton>
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
    <Card>
      <CardContent className='flex justify-between gap-4 flex-wrap flex-col sm:flex-row items-center'>
        <div className='flex flex-col sm:flex-row max-sm:is-full items-center gap-4'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search E-Warranty'
            className='max-sm:is-full min-is-[200px]'
          />
        </div>
        <Button
          color='secondary'
          variant='outlined'
          startIcon={<i className='ri-upload-2-line text-xl' />}
          className='max-sm:is-full'
        >
          <CSVLink
            className='exportBtn'
            data={temp}
            headers={headers}
            filename={`all-ewarranties-${new Date().toISOString()}.csv`}
          >
            Export
          </CSVLink>
        </Button>
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
  )
}

export default OrderListTable
