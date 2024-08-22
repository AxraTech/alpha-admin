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

const ShippingActivity = ({ orderData }) => {
  return (
    <Card>
      <CardHeader title='Shipping Activity' />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Order was placed (Order ID: #{orderData.order_number})
                </Typography>

                <Typography variant='caption'>{new Date(orderData.ordered_at).toLocaleString()}</Typography>
              </div>
              <Typography className='mbe-2'>Order has been placed successfully</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              {console.log('preparing at ', orderData.preparing_at)}
              <TimelineDot
                variant={orderData.preparing_at === null ? 'outlined' : 'contained'}
                color={orderData.preparing_at === null ? 'grey' : 'primary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Preparing
                </Typography>
                {orderData.preparing_at !== null && (
                  <Typography variant='caption'>{new Date(orderData?.preparing_at).toLocaleString()}</Typography>
                )}
              </div>
              <Typography className='mbe-2'>Order is preparing</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant={orderData.delivering_at === null ? 'outlined' : 'contained'}
                color={orderData.delivering_at === null ? 'grey' : 'primary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Delivering
                </Typography>
                {orderData.delivering_at !== null && (
                  <Typography variant='caption'>{new Date(orderData?.delivering_at).toLocaleString()}</Typography>
                )}
              </div>
              <Typography className='mbe-2'>Order is delivering </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant={orderData.completed_at === null ? 'outlined' : 'contained'}
                color={orderData.completed_at === null ? 'grey' : 'primary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Completed
                </Typography>
                {orderData.completed_at !== null && (
                  <Typography variant='caption'>{new Date(orderData?.completed_at).toLocaleString()}</Typography>
                )}
              </div>
              <Typography className='mbe-2'>Order has been completed </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Dispatched for delivery
                </Typography>
                <Typography variant='caption'>Today 14:12 PM</Typography>
              </div>
              <Typography className='mbe-2'>Package has left an Amazon facility , NY</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
            </TimelineSeparator>
            <TimelineContent>
              <Typography color='text.primary' className='font-medium'>
                Delivery
              </Typography>
              <Typography className='mbe-2'>Package will be delivered by tomorrow</Typography>
            </TimelineContent>
          </TimelineItem> */}
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ShippingActivity
