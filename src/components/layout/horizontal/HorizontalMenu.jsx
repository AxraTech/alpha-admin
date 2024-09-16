// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'
import Chip from '@mui/material/Chip'

// Component Imports
import HorizontalNav, { Menu, SubMenu, MenuItem } from '@menu/horizontal-menu'
import VerticalNavContent from './VerticalNavContent'

// import { GenerateHorizontalMenu } from '@components/GenerateMenu'
// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Styled Component Imports
import StyledHorizontalNavExpandIcon from '@menu/styles/horizontal/StyledHorizontalNavExpandIcon'
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuRootStyles from '@core/styles/horizontal/menuRootStyles'
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'
import verticalNavigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'
import verticalMenuItemStyles from '@core/styles/vertical/menuItemStyles'
import verticalMenuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ level }) => (
  <StyledHorizontalNavExpandIcon level={level}>
    <i className='ri-arrow-right-s-line' />
  </StyledHorizontalNavExpandIcon>
)

const RenderVerticalExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const HorizontalMenu = ({ dictionary }) => {
  // Hooks
  const verticalNavOptions = useVerticalNav()
  const theme = useTheme()
  const { settings } = useSettings()
  const params = useParams()

  // Vars
  const { skin } = settings
  const { transitionDuration } = verticalNavOptions
  const { lang: locale } = params

  return (
    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(verticalNavOptions, theme),
        backgroundColor:
          skin === 'bordered' ? 'var(--mui-palette-background-paper)' : 'var(--mui-palette-background-default)'
      }}
    >
      <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuItemStyles={menuItemStyles(theme, 'ri-circle-line')}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 4 : 16),
          alignmentAxis: 0
        }}
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
          renderExpandIcon: ({ open }) => (
            <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
          ),
          renderExpandedMenuItemIcon: { icon: <i className='ri-circle-line' /> },
          menuSectionStyles: verticalMenuSectionStyles(verticalNavOptions, theme)
        }}
      >
        <SubMenu label={dictionary['navigation'].dashboards} icon={<i className='ri-home-smile-line' />}>
          {/* <MenuItem href={`/${locale}/dashboards/crm`} icon={<i className='ri-pie-chart-2-line' />}>
            {dictionary['navigation'].crm}
          </MenuItem> */}
          <MenuItem href={`/${locale}/dashboards/ecommerce`} icon={<i className='ri-shopping-bag-3-line' />}>
            {dictionary['navigation'].eCommerce}
          </MenuItem>
        </SubMenu>

        <SubMenu label={dictionary['navigation'].apps} icon={<i className='ri-mail-open-line' />}>
          <SubMenu label={dictionary['navigation'].eCommerce} icon={<i className='ri-shopping-bag-3-line' />}>
            <MenuItem href={`/${locale}/dashboard`}>{dictionary['navigation'].dashboard}</MenuItem>
            <SubMenu label={dictionary['navigation'].products}>
              <MenuItem href={`/${locale}/products/list`}>{dictionary['navigation'].list}</MenuItem>
              <MenuItem href={`/${locale}/products/add`}>{dictionary['navigation'].add}</MenuItem>
              <MenuItem href={`/${locale}/products/category`}>{dictionary['navigation'].category}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].orders}>
              <MenuItem href={`/${locale}/orders/list`}>{dictionary['navigation'].list}</MenuItem>
              <MenuItem href={`/${locale}/orders/details/5434`} exactMatch={false} activeUrl='/orders/details'>
                {dictionary['navigation'].details}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].customers}>
              <MenuItem href={`/${locale}/customers/list`}>{dictionary['navigation'].list}</MenuItem>
              <MenuItem href={`/${locale}//customers/details/879861`} exactMatch={false} activeUrl='/customers/details'>
                {dictionary['navigation'].details}
              </MenuItem>
            </SubMenu>
            <MenuItem href={`/${locale}/manage-reviews`}>{dictionary['navigation'].manageReviews}</MenuItem>
          </SubMenu>

          <MenuItem href={`/${locale}/chat`} icon={<i className='ri-wechat-line' />}>
            {dictionary['navigation'].chat}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].invoice} icon={<i className='ri-file-list-2-line' />}>
            <MenuItem href={`/${locale}/invoice/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/invoice/preview/4987`} exactMatch={false} activeUrl='/invoice/preview'>
              {dictionary['navigation'].preview}
            </MenuItem>
            <MenuItem href={`/${locale}/invoice/edit/4987`} exactMatch={false} activeUrl='/invoice/edit'>
              {dictionary['navigation'].edit}
            </MenuItem>
            <MenuItem href={`/${locale}/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].user} icon={<i className='ri-user-line' />}>
            <MenuItem href={`/${locale}/user/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/user/view`}>{dictionary['navigation'].view}</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>

      {/* <Menu
          rootStyles={menuRootStyles(theme)}
          renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
          renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
          menuItemStyles={menuItemStyles(theme, 'ri-circle-line')}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 4 : 16),
            alignmentAxis: 0
          }}
          verticalMenuProps={{
            menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
            renderExpandIcon: ({ open }) => (
              <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
            ),
            renderExpandedMenuItemIcon: { icon: <i className='ri-circle-line' /> },
            menuSectionStyles: verticalMenuSectionStyles(verticalNavOptions, theme)
          }}
        >
          <GenerateHorizontalMenu menuData={menuData(dictionary)} />
        </Menu> */}
    </HorizontalNav>
  )
}

export default HorizontalMenu
