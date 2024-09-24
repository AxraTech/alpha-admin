'use client'
// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Component Imports
import AddAddress from '@components/dialogs/add-edit-address'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Vars
const data = {
  firstName: 'Roker',
  lastName: 'Terrace',
  email: 'sbaser0@boston.com',
  country: 'UK',
  address1: 'Latheronwheel',
  address2: 'KW5 8NW, London',
  landmark: 'Near Water Plant',
  city: 'London',
  state: 'Capholim',
  zipCode: '403114',
  taxId: 'TAX-875623',
  vatNumber: 'SDF754K77',
  contact: '+1 (609) 972-22-22'
}

const ShippingAddress = ({ warrantyData }) => {
  // Vars
  const typographyProps = (children, color, className) => ({
    children,
    color,
    className
  })

  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <div className='flex justify-between items-center'>
          <Typography variant='h5'>Product Details</Typography>
        </div>
        {/* category */}
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <Typography>Category</Typography>
            <Typography color='text.primary' className='font-medium'>
              {warrantyData?.product_category?.title}
            </Typography>
          </div>
        </div>
        {/* model_number */}
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <Typography>Model Number</Typography>
            <Typography color='text.primary' className='font-medium'>
              {warrantyData?.model_number}
            </Typography>
          </div>
        </div>
        {/* serial_number */}
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <Typography>Serial Number</Typography>
            <Typography color='text.primary' className='font-medium'>
              {warrantyData?.serial_number}
            </Typography>
          </div>
        </div>
        {/* purchase_date */}
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <Typography>Purchase Date</Typography>
            <Typography color='text.primary' className='font-medium'>
              {new Date(warrantyData?.purchase_date)?.toLocaleString()}
            </Typography>
          </div>
        </div>
        {/* shop_name */}
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <Typography>Shop Name</Typography>
            <Typography color='text.primary' className='font-medium'>
              {warrantyData?.shop_name}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ShippingAddress
