'use client'
// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CardStatWithImage from '@components/card-statistics/Character'
import CardStatVertical from '@components/card-statistics/Vertical'
import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'
import DeveloperMeetup from '@views/dashboards/crm/DeveloperMeetup'
import LineAreaChart from '@views/dashboards/crm/LineAreaChart'
import MeetingSchedule from '@views/dashboards/crm/MeetingSchedule'
import RevenueReport from '@views/dashboards/crm/RevenueReport'
import CardWidgetsSalesOverview from '@views/dashboards/crm/SalesOverview'
import TotalSales from '@views/dashboards/crm/TotalSales'
import Transactions from '@views/dashboards/crm/Transactions'
import UpgradePlan from '@views/dashboards/crm/UpgradePlan'
import WeeklySales from '@views/dashboards/crm/WeeklySales'
import { styled, Typography } from '@mui/material'

const DashboardCRM = () => {
  const FadeInTypography = styled(Typography)(({ theme }) => ({
    animation: 'fadeIn 2s ease-in-out',
    '@keyframes fadeIn': {
      '0%': { opacity: 0, transform: 'translateX(-50px)' },
      '100%': { opacity: 1, transform: 'translateX(10)' }
    }
  }))
  const FadeInScaleTypography = styled(Typography)(({ theme }) => ({
    animation: 'fadeInScale 2s ease-in-out',
    '@keyframes fadeInScale': {
      '0%': { opacity: 0, transform: 'scale(-0.8)' },
      '100%': { opacity: 1, transform: 'scale(1)' }
    }
  }))
  return (
    // <Grid container spacing={6}>
    //   <Grid item xs={12} sm={6} md={12} className='min-h-10 justify-items-center text-center align-middle'>
    //     Welcome To
    //     <Typography>ALPHA</Typography>
    //   </Grid>
    //   {/* <Grid item xs={12} sm={6} md={3} className='self-end'>
    //     <CardStatWithImage
    //       stats='13k'
    //       title='Ratings'
    //       trendNumber='15.6%'
    //       chipColor='primary'
    //       src='/images/illustrations/characters/9.png'
    //       chipText={`Year of ${new Date().getFullYear()}`}
    //     />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3} className='self-end'>
    //     <CardStatWithImage
    //       stats='24.5k'
    //       trend='negative'
    //       title='Sessions'
    //       trendNumber='20%'
    //       chipText='Last Week'
    //       src='/images/illustrations/characters/10.png'
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6} className='self-end'>
    //     <Transactions/>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}>
    //     <TotalSales/>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}>
    //     <RevenueReport/>
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <CardWidgetsSalesOverview/>
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <ActivityTimeline/>
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <Grid container spacing={6}>
    //       <Grid item xs={12} sm={8}>
    //         <WeeklySales/>
    //       </Grid>
    //       <Grid item xs={12} sm={4}>
    //         <Grid container spacing={6}>
    //           <Grid item xs={6} sm={12}>
    //             <LineAreaChart/>
    //           </Grid>
    //           <Grid item xs={6} sm={12}>
    //             <CardStatVertical
    //               stats='862'
    //               trend='negative'
    //               trendNumber='18%'
    //               title='New Project'
    //               subtitle='Yearly Project'
    //               avatarColor='primary'
    //               avatarIcon='ri-file-word-2-line'
    //             />
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12} sm={6} lg={4}>
    //     <UpgradePlan/>
    //   </Grid>
    //   <Grid item xs={12} sm={6} lg={4}>
    //     <MeetingSchedule/>
    //   </Grid>
    //   <Grid item xs={12} sm={6} lg={4}>
    //     <DeveloperMeetup/>
    //   </Grid> */}
    // </Grid>
    <Grid
      container
      spacing={6}
      sx={{
        minHeight: '70vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Grid item xs={12}>
        <FadeInScaleTypography variant='h1'>Welcome To</FadeInScaleTypography>
        <FadeInTypography variant='h2'>ALPHA</FadeInTypography>
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
