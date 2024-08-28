// Component Imports
import DiscountList from '@views/products/discount/list'

// Data Imports
import { getEcommerceData } from '@/app/server/actions'

const DiscountListPage = async () => {
  // Vars
  const data = await getEcommerceData()

  return <DiscountList />
}

export default DiscountListPage
