'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Grid from '@mui/material/Grid'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'
import { Button } from '@mui/material'
import { useMutation, useSuspenseQuery } from '@apollo/client'
import { CHANGE_USER_STATUS } from '@/graphql/mutations'
import { useParams } from 'next/navigation'
import { GET_USER_BY_ID } from '@/graphql/queries'

const UserRight = ({ tabContentList }) => {
  const { userId } = useParams()

  const { data: users } = useSuspenseQuery(GET_USER_BY_ID, { variables: { userId: userId } })

  // States
  const [activeTab, setActiveTab] = useState('order')
  const [changeUserStatus] = useMutation(CHANGE_USER_STATUS)
  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  const handleChangeUserStatus = async (id, status, role) => {
    await changeUserStatus({
      variables: {
        data: {
          ...status,
          ...role
        },
        id: id
      }
    })
  }
  return (
    <>
      <TabContext value={activeTab}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
              <Tab icon={<i className='ri-shopping-cart-line' />} value='order' label='Order' iconPosition='start' />
              <Tab icon={<i className='ri-bill-line' />} value='invoice' label='Invoice' iconPosition='start' />
              <Tab
                icon={<i className='ri-chat-quote-line' />}
                value='quotation'
                label='Quotation'
                iconPosition='start'
              />
              <Tab
                icon={<i className='ri-nft-fill' />}
                value='service_token'
                label='Service Token'
                iconPosition='start'
              />
              <Tab
                icon={<i className='ri-notification-2-line' />}
                value='notifications'
                label='Notifications'
                iconPosition='start'
              />
            </CustomTabList>
          </Grid>
          <Grid item xs={12} className='flex gap-4'>
            <Button
              variant='outlined'
              color='info'
              onClick={() => handleChangeUserStatus(users.users_by_pk.id, { role: 'dealer' })}
            >
              Dealer
            </Button>
            <Button
              variant='outlined'
              color='warning'
              onClick={() => handleChangeUserStatus(users.users_by_pk.id, { role: 'consumer' })}
            >
              Consumer
            </Button>
            <Button
              variant='outlined'
              color='success'
              onClick={() => handleChangeUserStatus(users.users_by_pk.id, { status: 'active' })}
            >
              Active
            </Button>
            <Button
              variant='outlined'
              color='primary'
              onClick={() => handleChangeUserStatus(users.users_by_pk.id, { status: 'pending' })}
            >
              Pending
            </Button>
            <Button
              variant='outlined'
              color='error'
              onClick={() => handleChangeUserStatus(users.users_by_pk.id, { status: 'disable' })}
            >
              Disabled
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={activeTab} className='p-0'>
              {tabContentList[activeTab]}
            </TabPanel>
          </Grid>
        </Grid>
      </TabContext>
    </>
  )
}

export default UserRight
