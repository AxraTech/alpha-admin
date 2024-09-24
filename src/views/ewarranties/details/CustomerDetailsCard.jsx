'use client'
// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import EditUserInfo from '@components/dialogs/edit-user-info'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Util Imports
import { getInitials } from '@/utils/getInitials'

const getAvatar = params => {
  const { avatar, customer } = params

  if (avatar) {
    return <Avatar src={avatar} />
  } else {
    return <Avatar>{getInitials(customer)}</Avatar>
  }
}

// Vars
const userData = {
  firstName: 'Gabrielle',
  lastName: 'Feyer',
  userName: '@gabriellefeyer',
  billingEmail: 'gfeyer0@nyu.edu',
  status: 'active',
  role: 'Customer',
  taxId: 'Tax-8894',
  contact: '+1 (234) 464-0600',
  language: ['English'],
  country: 'France',
  useAsBillingAddress: true
}

const CustomerDetails = ({ warrantyData }) => {
  // Vars
  const typographyProps = (children, color, className) => ({
    children,
    color,
    className
  })

  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <Typography variant='h5'>Customer details</Typography>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <Typography>Customer Name</Typography>
            <Typography color='text.primary' className='font-medium'>
              {warrantyData?.customer_name}
            </Typography>
          </div>
        </div>
        {/* phone */}
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <Typography>Customer Phone</Typography>
            <Typography color='text.primary' className='font-medium'>
              {warrantyData?.customer_phone}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerDetails
