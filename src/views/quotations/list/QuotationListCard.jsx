import CustomAvatar from '@/@core/components/mui/Avatar'
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const InvoiceListCard = ({ count, title }) => {
  return (
    <div>
      <Card>
        <CardContent className='flex justify-between gap-1 '>
          <div className='flex flex-col gap-1 flex-grow'>
            <Typography color='text.primary' variant='h3'>
              {count}
            </Typography>
            <div className='flex items-center gap-2 flex-wrap'>
              <Typography
                variant='h5'
                color={`${title === 'Pending' ? 'orange' : title === 'User' ? 'primary' : title === 'Reject' ? 'error' : title === 'Complete' ? 'green' : 'grey'}`}
              >
                {title}
              </Typography>
            </div>
            {/* <Typography variant='body2'>subtitle</Typography> */}
          </div>
          <CustomAvatar skin='light' variant='rounded' size={42}>
            <i
              class={`${title === 'Pending' ? 'ri-pass-pending-fill' : title === 'User' ? 'ri-user-add-line' : title === 'Reject' ? 'ri-user-unfollow-fill ' : title === 'Complete' ? 'ri-check-double-fill' : 'grey'}`}
            ></i>
          </CustomAvatar>
        </CardContent>
      </Card>
    </div>
  )
}

export default InvoiceListCard
