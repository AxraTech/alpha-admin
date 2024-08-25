// Next Impo\rts
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import UserLeftOverview from '@views/user/view/user-left-overview'
import UserRight from '@views/user/view/user-right'

// Data Imports

// const OverViewTab = dynamic(() => import('@views/user/view/user-right/overview'))
// const SecurityTab = dynamic(() => import('@views/user/view/user-right/security'))
const NotificationsTab = dynamic(() => import('@views/user/view/user-right/notifications'))
const OrderViewTab = dynamic(() => import('@views/user/view/user-right/order'))
const InvoiceViewTab = dynamic(() => import('@views/user/view/user-right/invoice'))
const QuotationViewTab = dynamic(() => import('@views/user/view/user-right/quotation'))
const ServiceTokenViewTab = dynamic(() => import('@views/user/view/user-right/service_token'))

// Vars
const tabContentList = data => ({
  // overview: <OverViewTab />,
  // security: <SecurityTab />,
  notifications: <NotificationsTab />,
  order: <OrderViewTab />,
  invoice: <InvoiceViewTab />,
  quotation: <QuotationViewTab />,
  service_token: <ServiceTokenViewTab />
})

const UserViewTab = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={4} md={5}>
        <UserLeftOverview />
      </Grid>
      <Grid item xs={12} lg={8} md={7}>
        {/* <UserRight tabContentList={tabContentList()}/> */}
        <UserRight tabContentList={tabContentList()} />
      </Grid>
    </Grid>
  )
}

export default UserViewTab
