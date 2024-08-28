// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'
import { Card, CardContent, Typography } from '@mui/material'
import CustomAvatar from '@/@core/components/mui/Avatar'

// Vars
const data = [
  {
    title: 'Dealers',
    stats: '4,567',
    avatarIcon: 'ri-user-add-line',
    avatarColor: 'error',
    trend: 'positive'
  },
  {
    title: 'Consumers',
    stats: '19,860',
    avatarIcon: 'ri-user-follow-line',
    avatarColor: 'success',
    trend: 'negative'
  },
  {
    title: 'Active Users',
    stats: '237',
    avatarIcon: 'ri-user-search-line',
    avatarColor: 'warning',
    trend: 'positive'
  },
  {
    title: 'Pending Users',
    stats: '237',
    avatarIcon: 'ri-user-search-line',
    avatarColor: 'warning',
    trend: 'positive'
  }
]

const UserListCards = ({ count, title }) => {
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
              color={`${title === 'Disable' ? 'red' : title === 'Pending' ? 'orange' : title === 'Dealer' ? 'green' : title === 'Consumer' ? 'blue' : 'grey'}`}
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
  )
}

export default UserListCards
