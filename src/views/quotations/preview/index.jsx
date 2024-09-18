'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import PreviewActions from './PreviewActions'
import PreviewCard from './PreviewCard'
import QuotationStatus from './QuotationStatus'
import { INVOICE_BY_ID, QUOTATION_BY_ID } from '@/graphql/queries'
import { useParams } from 'next/navigation'
import { useQuery, useSuspenseQuery } from '@apollo/client'

const Preview = () => {
  const { id } = useParams()

  const { data: quotationData } = useSuspenseQuery(QUOTATION_BY_ID, { variables: { id: id } })

  // Handle Print Button Click
  const handleButtonClick = () => {
    window.print()
  }

  return (
    <>
      {/* <Grid container spacing={6}>
        <Grid item xs={12} md={12} paddingBottom={10}>
          <QuotationStatus quotationData={quotationData.quotations_by_pk} />
        </Grid>
      </Grid> */}
      <Grid container spacing={6}>
        {/* <Grid item xs={12} md={9}>
          <QuotationStatus quotationData={quotationData.quotations_by_pk} />
        </Grid> */}
        <Grid item xs={12} md={9}>
          <PreviewCard quotationData={quotationData?.quotations_by_pk} />
        </Grid>
        <Grid item xs={12} md={3} className='flex flex-col gap-5'>
          <QuotationStatus quotationData={quotationData?.quotations_by_pk} />

          <PreviewActions onButtonClick={handleButtonClick} quotationData={quotationData?.quotations_by_pk} />
        </Grid>
      </Grid>
    </>
  )
}

export default Preview
