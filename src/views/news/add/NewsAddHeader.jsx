'use client'
// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const NewsAddHeader = ({ handleDiscardProduct, handleaddNews }) => {
  return (
    <div className='flex flex-wrap sm:items-center justify-between max-sm:flex-col gap-6'>
      <div>
        <Typography variant='h4' className='mbe-1'>
          Add a News Post
        </Typography>
        {/* <Typography>Orders placed across your store</Typography> */}
      </div>
      <div className='flex flex-wrap max-sm:flex-col gap-4'>
        <Button variant='outlined' color='secondary' onClick={handleDiscardProduct}>
          Discard
        </Button>

        <Button variant='contained' onClick={handleaddNews}>
          Publish News
        </Button>
      </div>
    </div>
  )
}

export default NewsAddHeader
