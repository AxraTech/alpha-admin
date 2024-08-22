'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import PreviewActions from './PreviewActions'
import PreviewCard from './PreviewCard'
import { INVOICE_BY_ID } from '@/graphql/queries'
import { useParams } from 'next/navigation'
import { useQuery } from '@apollo/client'

const Preview = () => {
  const { id } = useParams()

  const { data: invoiceData } = useQuery(INVOICE_BY_ID, { variables: { id: id } })

  // Handle Print Button Click
  const handleButtonClick = () => {
    window.print()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>
        <PreviewCard invoiceData={invoiceData} />
      </Grid>
      <Grid item xs={12} md={3}>
        <PreviewActions onButtonClick={handleButtonClick} invoiceData={invoiceData?.invoices_by_pk} />
      </Grid>
    </Grid>
  )
}

export default Preview
