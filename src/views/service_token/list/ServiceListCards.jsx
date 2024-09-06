'use client'
import CustomAvatar from '@/@core/components/mui/Avatar'
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const ServiceListCard = ({ title, count }) => {
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
                color={`${title === 'Cancel' ? 'error' : title === 'Active' ? 'primary' : title === 'Receive' ? 'orange' : title === 'Complete' ? 'green' : 'grey'}`}
              >
                {title}
              </Typography>
            </div>
            {/* <Typography variant='body2'>subtitle</Typography> */}
          </div>
          <CustomAvatar skin='light' variant='rounded' size={42}>
            <i
              class={`${title === 'Active' ? 'ri-user-add-line' : title === 'Cancel' ? 'ri-close-circle-fill' : title === 'Receive' ? 'ri-safe-fill' : 'ri-check-double-line'}`}
            ></i>
          </CustomAvatar>
        </CardContent>
      </Card>
    </div>
  )
}

export default ServiceListCard
