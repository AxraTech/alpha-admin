// Next Imports
import { redirect } from 'next/navigation'

// Component Imports
import Preview from '@views/invoice/preview'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'
import { useSuspenseQuery } from '@apollo/client'
import { INVOICE_BY_ID } from '@/graphql/queries'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/invoice` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getInvoiceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
} */
const PreviewPage = async ({ params }) => {
  // const { invoiceId } = useParams()
  const { data } = useSuspenseQuery(INVOICE_BY_ID, { variables: { id: '' } })

  // Vars
  // const data = await getInvoiceData()
  // const filteredData = data?.invoices_by_pk.filter(invoice => invoice.id === params.id)[0]

  return <Preview invoiceData={data} id={invoiceId} />
}

export default PreviewPage
