'use client'
// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

// Component Imports
import Logo from '@components/layout/shared/Logo'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import './print.css'
import { useMutation, useQuery } from '@apollo/client'
import { INVOICE_BY_ID } from '@/graphql/queries'
import { useParams } from 'next/navigation'
import { useApp } from '@/app/ApolloWrapper'
import { CHANGE_INVOICE_STATUS, CHANGE_QUOTATION_STATUS } from '@/graphql/mutations'
import { Button, Chip } from '@mui/material'
import PaymentList from './PaymentList'
import { invoiceStatusColor } from '@components/helper/StatusColor'

const PreviewCard = ({ invoiceData }) => {
  const invoiceDataId = invoiceData?.invoices_by_pk
  const { setGlobalMsg } = useApp()
  const [changeInvoiceStatus] = useMutation(CHANGE_INVOICE_STATUS)
  const handleChangeInvoiceStatus = async (id, status) => {
    try {
      await changeInvoiceStatus({
        variables: {
          data: {
            ...status
          },
          id: id
        }
      })
      setGlobalMsg('✅ Change Order Status')
    } catch (e) {
      console.log('Change Status Error ', e)
    }
  }
  return (
    <Card className='previewCard'>
      <CardContent className='sm:!p-12'>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <div className='flex gap-4 mb-4'>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => handleChangeInvoiceStatus(invoiceDataId?.id, { status: 'paid' })}
              >
                Paid
              </Button>
              <Button
                variant='outlined'
                color='info'
                onClick={() => handleChangeInvoiceStatus(invoiceDataId?.id, { status: 'partially paid' })}
              >
                Partially Paid
              </Button>

              <Button
                variant='outlined'
                color='primary'
                onClick={() => handleChangeInvoiceStatus(invoiceDataId?.id, { status: 'unpaid' })}
              >
                UnPaid
              </Button>
              <Button
                variant='outlined'
                color='warning'
                onClick={() => handleChangeInvoiceStatus(invoiceDataId?.id, { status: 'pending' })}
              >
                Pending
              </Button>
              <Button
                variant='outlined'
                color='error'
                onClick={() =>
                  handleChangeInvoiceStatus(invoiceDataId?.id, { status: 'rejected' }, { completed_at: new Date() })
                }
              >
                Reject
              </Button>
            </div>
            <div className='p-6 bg-actionHover rounded'>
              <div className='flex justify-between gap-y-4 flex-col sm:flex-row'>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center'>
                    <Logo />
                  </div>
                  <div>
                    <Typography color='text.primary'>No. 297, Marlar Myaing Street,</Typography>
                    <Typography color='text.primary'>Tharkayta Industrial Zone,</Typography>
                    <Typography color='text.primary'>Yangon, Myanmar</Typography>
                    <Typography color='text.primary'>09- 428 694 996 09- 762 509 157</Typography>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='flex flex-row gap-3'>
                    <Typography variant='h5'>{`Invoice `}</Typography>
                    <Chip
                      label={invoiceDataId?.status}
                      color={invoiceStatusColor[invoiceDataId?.status]}
                      style={{ textTransform: 'capitalize' }}
                      variant='tonal'
                      size='small'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Typography color='text.primary'>Invoice Number : {invoiceDataId.invoice_number}</Typography>
                    <Typography color='text.primary'>
                      Date Issued : {new Date(invoiceDataId?.created_at).toLocaleDateString()}
                    </Typography>
                    <Typography color='text.primary'>
                      Date Due : {new Date(invoiceDataId?.updated_at).toLocaleDateString()}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6}>
                <div className='flex flex-col gap-4'>
                  <Typography className='font-medium' color='text.primary'>
                    Delivery Address To:
                  </Typography>
                  <div>
                    <Typography>{invoiceDataId.order.receiver_name}</Typography>
                    <Typography className='my-1'>{invoiceDataId?.order.receiver_phone}</Typography>
                    <Typography>{invoiceDataId?.order.receiver_address}</Typography>
                  </div>
                </div>
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <div className='flex flex-col gap-4'>
                  <Typography className='font-medium' color='text.primary'>
                    Bill To:
                  </Typography>
                  <div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Total Due:</Typography>
                      <Typography>{invoiceDataId?.total}</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Bank name:</Typography>
                      <Typography>-</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>Country:</Typography>
                      <Typography>-</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>IBAN:</Typography>
                      <Typography>-</Typography>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Typography className='min-is-[100px]'>SWIFT code:</Typography>
                      <Typography>-</Typography>
                    </div>
                  </div>
                </div>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className='overflow-x-auto border rounded'>
              <table className={tableStyles.table}>
                <thead>
                  <tr className='border-be'>
                    <th className='!bg-transparent'>Product</th>
                    <th className='!bg-transparent'>Brand</th>
                    <th className='!bg-transparent'>Price</th>
                    <th className='!bg-transparent'>Qty</th>
                    <th className='!bg-transparent'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  `
                  {invoiceDataId?.order?.order_items.map((item, index) => (
                    <tr key={index}>
                      <td className='w-70 text-wrap'>
                        <Typography color='text.primary'>{item.product.title}</Typography>
                      </td>

                      <td>
                        <Typography color='text.primary'>{item.product.brand.title}</Typography>
                      </td>
                      <td>
                        <Typography color='text.primary'>{item.product.price}</Typography>
                      </td>
                      <td>
                        <Typography color='text.primary'>{item.quantity}</Typography>
                      </td>
                      <td>
                        <Typography color='text.primary'>{item.total}</Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='flex justify-end flex-col gap-y-4 sm:flex-row'>
              {/* <div className='flex flex-col gap-1 order-2 sm:order-[unset]'>
                <div className='flex items-center gap-2'>
                  <Typography className='font-medium' color='text.primary'>
                    Salesperson:
                  </Typography>
                  <Typography>-</Typography>
                </div>
                <Typography>Thanks for your business</Typography>
              </div> */}
              {/* <div className='min-is-[200px]'>
                <div className='flex items-center justify-between'>
                  <Typography>Subtotal:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    {invoiceDataId.order.items_total}
                  </Typography>
                </div>
                <div className='flex items-center justify-between mt-2'>
                  <Typography>Balance:</Typography>

                  <Typography className='font-medium' color='text.primary'>
                    {invoiceDataId.balance}
                  </Typography>
                </div>
                <div className='flex items-center justify-between'>
                  <Typography>Tax:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    21%
                  </Typography>
                </div>
                <Divider className='mlb-2' />
                <div className='flex items-center justify-between'>
                  <Typography>Total:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    {invoiceDataId.total}
                  </Typography>
                </div>
              </div> */}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider className='border-dashed' />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Typography component='span' className='font-medium' color='text.primary'>
                Note :{' '}
              </Typography>
              {invoiceDataId?.note}
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <PaymentList invoiceData={invoiceData} />
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PreviewCard
