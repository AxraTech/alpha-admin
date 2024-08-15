// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'
// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

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

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const { lang: locale } = params
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
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
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {/* dashboard */}
        <SubMenu
          label={dictionary['navigation'].dashboards}
          icon={<i className='ri-home-smile-line' />}
          suffix={<Chip label='5' size='small' color='error' />}
        >
          <MenuItem href={`/${locale}/dashboards/crm`}>{dictionary['navigation'].crm}</MenuItem>
          <MenuItem href={`/${locale}/dashboards/ecommerce`}>{dictionary['navigation'].eCommerce}</MenuItem>
        </SubMenu>

        {/* products */}
        <SubMenu
          label={dictionary['navigation'].products}
          icon={<i className='ri-home-smile-line' />}
          //suffix={<Chip label='5' size='small' color='error' />}
        >
          <MenuItem href={`/${locale}/products/list`}>{dictionary['navigation'].product_list}</MenuItem>
          <MenuItem href={`/${locale}/products/category`}>{dictionary['navigation'].category}</MenuItem>
          <MenuItem href={`/${locale}/products/brands`}>{dictionary['navigation'].brands}</MenuItem>
        </SubMenu>
        {/* newsfeed */}
        <SubMenu
          label={dictionary['navigation'].news}
          icon={<i className='ri-home-smile-line' />}
          //suffix={<Chip label='5' size='small' color='error' />}
        >
          <MenuItem href={`/${locale}/news/list`}>{dictionary['navigation'].news_list}</MenuItem>
          <MenuItem href={`/${locale}/news/category`}>{dictionary['navigation'].new_category}</MenuItem>
        </SubMenu>

        <MenuItem href={`/${locale}/chat`} icon={<i className='ri-wechat-line' />}>
          {dictionary['navigation'].chat}
        </MenuItem>

        <MenuItem href={`/${locale}/orders/list`} icon={<i className='ri-user-line' />}>
          {dictionary['navigation'].orders}
        </MenuItem>
        <MenuItem href={`/${locale}/user/list`} icon={<i className='ri-user-line' />}>
          {dictionary['navigation'].user}
        </MenuItem>
        <MenuItem href={`/${locale}/invoice/list`} icon={<i className='ri-bill-line' />}>
          {dictionary['navigation'].invoice}
        </MenuItem>

        <MenuItem href={`/${locale}/404-not-found`} target='_blank'>
          {dictionary['navigation'].pageNotFound404}
        </MenuItem>
        <MenuItem href={`/${locale}/401-not-authorized`} target='_blank'>
          {dictionary['navigation'].notAuthorized401}
        </MenuItem>
      </Menu>
      {/* <Menu
          popoutMenuOffset={{ mainAxis: 10 }}
          menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
          renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
          renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
          menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
        >
          <GenerateVerticalMenu menuData={menuData(dictionary)} />
        </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
