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

const ShippingActivity = ({ serviceData }) => {
  return (
    <Card>
      <CardHeader title='Delivery Activity' />
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
                  Service was placed (Token number: #{serviceData.token_number})
                </Typography>

                <Typography variant='caption'>{new Date(serviceData.received_at).toLocaleString()}</Typography>
              </div>
              <Typography className='mbe-2'>Received Service Token</Typography>
            </TimelineContent>
          </TimelineItem>
          {/* <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                variant={serviceData.received_at === null ? 'outlined' : 'contained'}
                color={serviceData.received_at === null ? 'grey' : 'primary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Received Token
                </Typography>
                {serviceData.received_at !== null && (
                  <Typography variant='caption'>{new Date(serviceData?.received_at).toLocaleString()}</Typography>
                )}
              </div>
              <Typography className='mbe-2'>Service Token is received</Typography>
            </TimelineContent>
          </TimelineItem> */}
          {serviceData.user.role === 'dealer' && (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  variant={serviceData.picking_up_at === null ? 'outlined' : 'contained'}
                  color={serviceData.picking_up_at === null ? 'grey' : 'primary'}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                  <Typography color='text.primary' className='font-medium'>
                    Picking Up
                  </Typography>
                  {serviceData.picking_up_at !== null && (
                    <Typography variant='caption'>{new Date(serviceData?.picking_up_at).toLocaleString()}</Typography>
                  )}
                </div>
                <Typography className='mbe-2'>Service is picking </Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                // variant={serviceData.processing_at === null ? 'contained' : 'outlined'}
                color={serviceData.processing_at === null ? 'grey' : 'primary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Processing
                </Typography>
                {serviceData.processing_at !== null && (
                  <Typography variant='caption'>{new Date(serviceData?.processing_at).toLocaleString()}</Typography>
                )}
              </div>
              <Typography className='mbe-2'>Service is processing </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                // variant={serviceData.delivering_at === null ? 'outlined' : 'contained'}
                color={serviceData.delivering_at === null ? 'grey' : 'primary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Delivering
                </Typography>
                {serviceData.delivering_at !== null && (
                  <Typography variant='caption'>{new Date(serviceData?.delivering_at).toLocaleString()}</Typography>
                )}
              </div>
              <Typography className='mbe-2'>Service is Delivering </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                // variant={serviceData.completed_at === null ? 'outlined' : 'contained'}
                color={serviceData.completed_at === null ? 'grey' : 'primary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex flex-wrap items-center justify-between gap-x-2 mbe-2.5'>
                <Typography color='text.primary' className='font-medium'>
                  Completed
                </Typography>
                {serviceData.completed_at !== null && (
                  <Typography variant='caption'>{new Date(serviceData?.completed_at).toLocaleString()}</Typography>
                )}
              </div>
              <Typography className='mbe-2'>Service has been completed </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ShippingActivity
