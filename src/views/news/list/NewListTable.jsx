'use client'

// React Imports
import { useEffect, useMemo, useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
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
import TableFilters from './TableFilters'
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { GET_NEWS, GET_PRODUCTS } from '@/graphql/queries'
import Avatar from '@mui/material/Avatar'
import { DELETE_NEWS, DELETE_PRODUCT } from '@/graphql/mutations'
import { useApp } from '@/app/ApolloWrapper'
import Alert from '@/components/helper/Alert'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
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
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

// Vars
const productCategoryObj = {
  Accessories: { icon: 'ri-headphone-line', color: 'error' },
  'Home Decor': { icon: 'ri-home-6-line', color: 'info' },
  Electronics: { icon: 'ri-computer-line', color: 'primary' },
  Shoes: { icon: 'ri-footprint-line', color: 'success' },
  Office: { icon: 'ri-briefcase-line', color: 'warning' },
  Games: { icon: 'ri-gamepad-line', color: 'secondary' }
}

const newStatusObj = {
  false: { title: 'Enabled', color: 'success' },
  true: { title: 'Disabled', color: 'error' }
}

// Column Definitions
const columnHelper = createColumnHelper()
const headers = [
  { label: 'Product Name', key: 'product_title' },
  { label: 'Product Category', key: 'title' },
  { label: 'Status', key: 'disabled' },
  { label: 'Created At', key: 'created_at' },
  { label: 'Updated At', key: 'updated_at' }
]
const NewListTable = () => {
  const { setGlobalMsg } = useApp()
  const { data: newData } = useSuspenseQuery(GET_NEWS)
  const [deletNew] = useMutation(DELETE_NEWS)
  // States
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[newData.news])
  const [filteredData, setFilteredData] = useState(data)
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang: locale } = useParams()

  const buttonProps = (children, color, variant) => ({
    children,
    color,
    variant
  })

  const temp = filteredData.map(item => ({
    ...item,
    product_title: item.title,
    title: item?.news_category?.title,
    // disabled: item.disabled === true ? 'Disable' : 'Enable',
    created_at: new Date(item.created_at)?.toLocaleString(),
    updated_at: new Date(item.updated_at)?.toLocaleString()
  }))
  const handleDelete = async id => {
    try {
      await deletNew({ variables: { id: id } })
      setGlobalMsg('✅ Delete Successful')
      setData(data?.filter(item => item.id !== id))
    } catch (e) {
      setGlobalMsg('❌ Delete Error')
      console.log('Delete Error', e)
    }
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'News',
        cell: ({ row }) => (
          <div className='flex items-center gap-4 w-80 text-wrap'>
            <img src={row.original?.image_url} width={38} height={38} className='rounded bg-actionHover' />

            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.title}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('news_category.title', {
        header: 'Category',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <Typography color='text.primary'>{row.original.news_category.title}</Typography>
          </div>
        )
      }),

      // columnHelper.accessor('disabled', {
      //   header: 'Status',
      //   cell: ({ row }) => (
      //     <Chip
      //       label={row.original.disabled ? 'Disabled' : 'Enabled'}
      //       variant='tonal'
      //       color={newStatusObj[row.original.disabled].color}
      //       size='small'
      //     />
      //   )
      // }),
      columnHelper.accessor('created_at', {
        header: 'Date',
        cell: ({ row }) => <Typography>{row.original.created_at.substring(0, 10)}</Typography>
      }),
      columnHelper.accessor('actions', {
        header: 'Actions',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <IconButton size='small'>
              <Link href={getLocalizedUrl(`/news/edit/${row.original.id}`, locale)} className='flex'>
                <i className='ri-edit-box-line text-[22px] ' />
              </Link>
            </IconButton>
            {/* <IconButton size='small' onClick={() => handleDelete(row?.original?.id)}>
              <i className='ri-delete-bin-7-line text-[22px] text-red-500' />
            </IconButton> */}
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps(<i className='ri-delete-bin-7-line text-[22px] text-red-500' />, 'error', '')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'deletePost' }}
              dataId={row.original.id}
              setData={setData}
              data={data}
            />
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <>
      <Card>
        <CardHeader title='Filters' className='pbe-4' />
        <TableFilters setData={setFilteredData} newData={data} />
        <Divider />
        <div className='flex justify-between flex-col items-start sm:flex-row sm:items-center gap-y-4 p-5'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search News'
            className='max-sm:is-full'
          />
          <div className='flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto'>
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
                filename={`all-newsProducts-${new Date().toISOString()}.csv`}
              >
                Export
              </CSVLink>
            </Button>
            <Button
              variant='contained'
              component={Link}
              href={getLocalizedUrl('/news/add', locale)}
              startIcon={<i className='ri-add-line' />}
              className='max-sm:is-full is-auto'
            >
              Add News
            </Button>
          </div>
        </div>
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
                  <td colSpan={table.getVisibleFlatColumns()?.length} className='text-center'>
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
          count={table.getFilteredRowModel().rows?.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
          onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
        />
      </Card>
      <Alert />
    </>
  )
}

export default NewListTable
