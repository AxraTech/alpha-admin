// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// Vars
const data = [
  {
    title: 'Dealers',
    stats: '4,567',
    avatarIcon: 'ri-user-add-line',
    avatarColor: 'error',
    trend: 'positive',
  },
  {
    title: 'Consumers',
    stats: '19,860',
    avatarIcon: 'ri-user-follow-line',
    avatarColor: 'success',
    trend: 'negative',
  },
  {
    title: 'Active Users',
    stats: '237',
    avatarIcon: 'ri-user-search-line',
    avatarColor: 'warning',
    trend: 'positive',
  },
  {
    title: 'Pending Users',
    stats: '237',
    avatarIcon: 'ri-user-search-line',
    avatarColor: 'warning',
    trend: 'positive',
  }
]

const UserListCards = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserListCards
