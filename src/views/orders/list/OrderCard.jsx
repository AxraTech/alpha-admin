'use client'
// MUI Imports

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import { useSuspenseQuery } from '@apollo/client'
import { ORDERS_AGGREGATE } from '@/graphql/queries'
import { useState } from 'react'
import { grey } from '@mui/material/colors'

// Vars
const data = [
  {
    value: 56,
    title: 'Pending Payment',
    icon: 'ri-calendar-2-line'
  },
  {
    value: 12689,
    title: 'Completed',
    icon: 'ri-check-double-line'
  },
  {
    value: 124,
    title: 'Refunded',
    icon: 'ri-wallet-3-line'
  },
  {
    value: 32,
    title: 'Failed',
    icon: 'ri-error-warning-line'
  }
]

const OrderCard = ({ count, title, color }) => {
  return (
    <>
      <Card>
        <CardContent className='flex justify-between gap-1 '>
          <div className='flex flex-col gap-1 flex-grow'>
            <Typography color='text.primary' variant='h3'>
              {count}
            </Typography>
            <div className='flex items-center gap-2 flex-wrap'>
              <Typography
                variant='h5'
                color={`${title === 'Active' ? 'primary' : title === 'Completed' ? 'green' : title === 'Refunded' ? 'orange' : 'error'}`}
              >
                {title}
              </Typography>
            </div>
            {/* <Typography variant='body2'>subtitle</Typography> */}
          </div>
          <CustomAvatar skin='light' variant='rounded' size={42}>
            {/* <i className={classnames(avatarIcon, 'text-[26px]')} /> */}
          </CustomAvatar>
        </CardContent>
      </Card>
    </>
  )
}

export default OrderCard
