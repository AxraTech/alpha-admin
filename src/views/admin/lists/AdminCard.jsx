'use client'
import CustomAvatar from '@/@core/components/mui/Avatar'
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const AdminCard = ({ count, title }) => {
  return (
    <Card>
      <CardContent className='flex justify-between gap-1 '>
        <div className='flex flex-col gap-1 flex-grow'>
          <Typography color='text.primary' variant='h3'>
            {count}
          </Typography>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography
              variant='h5'
              color={`${title === 'Admin' ? 'red' : title === 'Manager' ? 'orange' : title === 'Sale' ? 'green' : title === 'Finance' ? 'blue' : title === 'Service' ? 'yellow' : 'brown'}`}
            >
              {title}
            </Typography>
          </div>
          {/* <Typography variant='body2'>subtitle</Typography> */}
        </div>
        <CustomAvatar skin='light' variant='rounded' size={42}>
          <i
            className={`${title === 'Admin' ? 'ri-user-settings-fill' : title === 'Manager' ? 'ri-admin-fill' : title === 'Sale' ? 'ri-discount-percent-fill' : title === 'Finance' ? 'ri-money-pound-circle-fill' : title === 'Service' ? 'ri-service-fill' : 'ri-caravan-fill'}`}
          />
        </CustomAvatar>
      </CardContent>
    </Card>
  )
}

export default AdminCard
