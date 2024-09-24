// Component Imports
import EwarrantyListTable from '@views/ewarranties/list/EwarrantyListTable'

// Data Imports
import { getEcommerceData } from '@/app/server/actions'

const OrdersListPage = async () => {
  // Vars
  const data = await getEcommerceData()

  return <EwarrantyListTable />
}

export default OrdersListPage
