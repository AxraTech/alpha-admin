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
import { Dialog, DialogContent } from '@mui/material'

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

const EwarrantyDetailsCard = ({ warrantyData }) => {
  const [open, setOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const handleImageClick = imageUrl => {
    setModalImage(imageUrl)
    setOpen(true)
  }
  return (
    <>
      <Card>
        <CardContent className='flex flex-col gap-6'>
          <Typography variant='h5'>E-Warranty Details</Typography>
          {/* registration_date */}
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography>Registration Date</Typography>
              <Typography color='text.primary' className='font-medium'>
                {warrantyData?.registration_date}
              </Typography>
              {/* <Typography>Customer ID: #47389</Typography> */}
            </div>
          </div>
          {/* start date */}
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography>Start Date</Typography>
              <Typography color='text.primary' className='font-medium'>
                {warrantyData?.warranty_start_date}
              </Typography>
              {/* <Typography>Customer ID: #47389</Typography> */}
            </div>
          </div>
          {/* end date */}
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography>End Date</Typography>
              <Typography color='text.primary' className='font-medium'>
                {warrantyData?.warranty_end_date}
              </Typography>
              {/* <Typography>Customer ID: #47389</Typography> */}
            </div>
          </div>
          {/* warranty_period_month */}
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography>Warranty Periods</Typography>
              <Typography color='text.primary' className='font-medium'>
                {warrantyData?.warranty_period_month}
              </Typography>
              {/* <Typography>Customer ID: #47389</Typography> */}
            </div>
          </div>
          {/* receipt_image_url */}
          <div className='flex items-center gap-3'>
            <div className='flex flex-col'>
              <Typography>Receipt Image</Typography>
              <img
                src={warrantyData?.receipt_image_url}
                alt='receipt image'
                width={100}
                height={100}
                onClick={() => handleImageClick(warrantyData.receipt_image_url)}
              ></img>
              {/* <Typography>Customer ID: #47389</Typography> */}
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
          setModalImage('')
        }}
        maxWidth='md'
      >
        <DialogContent>
          <img src={modalImage} alt='Full Screen' style={{ width: '400px', height: 'auto', overfow: 'hidden' }} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EwarrantyDetailsCard
