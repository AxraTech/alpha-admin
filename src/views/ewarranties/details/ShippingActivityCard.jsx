'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    },
    '& .MuiTimelineContent-root:last-child': {
      paddingBottom: 0
    },
    '&:nth-last-child(2) .MuiTimelineConnector-root': {
      backgroundColor: 'transparent',
      borderInlineStart: '1px dashed var(--mui-palette-divider)'
    },
    '& .MuiTimelineConnector-root': {
      backgroundColor: 'var(--mui-palette-primary-main)'
    }
  }
})

const ShippingActivity = ({ warrantyData }) => {
  return (
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
      </CardContent>
    </Card>
  )
}

export default ShippingActivity
