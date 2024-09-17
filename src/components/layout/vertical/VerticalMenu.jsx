// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'
// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import { checkRoleBaseNav, getRoleBaseNav } from '@/utils/helper'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()

  const role = jwtDecode(Cookies.get('token'))?.role

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const { lang: locale } = params
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {/* dashboard */}

        {/* products */}
        {checkRoleBaseNav(role, 'products') && (
          <SubMenu label={dictionary['navigation'].products} icon={<i className='ri-gift-line' />}>
            <MenuItem href={`/${locale}/products/list`}>{dictionary['navigation'].product_list}</MenuItem>
            <MenuItem href={`/${locale}/products/category`}>{dictionary['navigation'].category}</MenuItem>
            <MenuItem href={`/${locale}/products/brands`}>{dictionary['navigation'].brands}</MenuItem>
          </SubMenu>
        )}

        {/* newsfeed */}
        {checkRoleBaseNav(role, 'news') && (
          <SubMenu
            label={dictionary['navigation'].news}
            icon={<i className='ri-news-line' />}
            //suffix={<Chip label='5' size='small' color='error' />}
          >
            <MenuItem href={`/${locale}/news/list`}>{dictionary['navigation'].news_list}</MenuItem>
            <MenuItem href={`/${locale}/news/category`}>{dictionary['navigation'].new_category}</MenuItem>
          </SubMenu>
        )}

        {checkRoleBaseNav(role, 'service_center') && (
          <MenuItem href={`/${locale}/services/service_center`} icon={<i className='ri-store-2-fill' />}>
            {dictionary['navigation'].service_center}
          </MenuItem>
        )}

        {checkRoleBaseNav(role, 'service_token') && (
          <MenuItem href={`/${locale}/services/service_token`} icon={<i className='ri-nft-fill' />}>
            {dictionary['navigation'].service_token}
          </MenuItem>
        )}

        {checkRoleBaseNav(role, 'admin') && (
          <MenuItem href={`/${locale}/admin`} icon={<i className='ri-group-3-fill' />}>
            {dictionary['navigation'].admin}
          </MenuItem>
        )}

        {/* quotation */}
        {checkRoleBaseNav(role, 'quotations') && (
          <MenuItem href={`/${locale}/quotations`} icon={<i className='ri-chat-quote-line' />}>
            {dictionary['navigation'].quotations}
          </MenuItem>
        )}

        {/* invoice */}
        {checkRoleBaseNav(role, 'invoice') && (
          <MenuItem href={`/${locale}/invoice/list`} icon={<i className='ri-bill-line' />}>
            {dictionary['navigation'].invoice}
          </MenuItem>
        )}

        {/* order */}
        {checkRoleBaseNav(role, 'orders') && (
          <MenuItem href={`/${locale}/orders/list`} icon={<i className='ri-shopping-cart-line' />}>
            {dictionary['navigation'].orders}
          </MenuItem>
        )}

        {/* user */}
        {checkRoleBaseNav(role, 'user') && (
          <MenuItem href={`/${locale}/user/list`} icon={<i className='ri-user-line' />}>
            {dictionary['navigation'].user}
          </MenuItem>
        )}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
