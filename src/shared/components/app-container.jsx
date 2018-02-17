/* @flow */
import * as React from 'react'
import styled from 'styled-components'
import {
  AppBar, IconButton, Grid, Typography as _Typography,
  Toolbar, withStyles, Hidden
} from 'material-ui'
import Tabs, { Tab } from 'material-ui/Tabs'
import { Menu as MenuIcon, MoreVert as MoreIcon } from 'material-ui-icons'
import { white } from 'material-ui/colors'
import { Router } from 'react-router'
import ui from 'redux-ui'

import Menu from './drawer-menu'
import { history } from '../store'

const Typography = styled(_Typography) `
  flex: 1;
`
const drawerWidth = 240;
const styles = theme => ({
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

const AppContainer =
  ui({
    persist: true,
    state: {
      menuOpen: false,
      activeTab: '',
      activeModule: {
        icon: undefined,
        name: '',
        slug: '',
        subModules: [],
      },
    },
    // reducer: (state, { type, payload: location }) => {
    //   if (type === LOCATION_CHANGE ) {
    //     const moduleSlug = state.get('activeModule').slug
    //     if(!moduleSlug || location.pathname && !new RegExp(`^/${moduleSlug}/?`).test(location.pathname)) {
    //       state = state.set('uuid', uuid())
    //     }
    //   }
    //   return state
    // },
  })(
    class AppContainer extends React.PureComponent {
      static defaultProps = {
        menu: 1,
        onOpenMenu: e => e,
        onCloseMenu: e => e,
        onMore: e => e,
      }
      onOpenMenu = () => {
        const { updateUI, ui: { menuOpen } } = this.props
        updateUI({ menuOpen: !menuOpen })
      }
      onCloseMenu = () => {
        const { updateUI, ui: { menuOpen } } = this.props
        updateUI({ menuOpen: !menuOpen })
      }
      onTabChange = value => this.props.updateUI({ activeTab: value })
      render = () => {
        const {
      menu, openMenu, onOpenMenu, onMore, children, classes,
          ui: {
        menuOpen,
            activeTab,
            activeModule: {
          icon: moduleIcon,
              name: moduleName,
              slug: moduleSlug,
              subModules,
        },
      },
    } = this.props
        return (
          <Router history={history}>
            <div>
              <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                  <IconButton onClick={onOpenMenu} className={classes.navIconHide}>
                    <MenuIcon color="inherit" />
                  </IconButton>
                  <Typography type="title" color="inherit">{moduleName}</Typography>
                  <IconButton onClick={onMore} >
                    <MoreIcon color="inherit" />
                  </IconButton>
                </Toolbar>
                <Tabs onChange={this.onTabChange}>
                  {[].concat(subModules).length > 0 ?
                    subModules.map((subModule, i) => (
                      <Tab
                        key={i}
                        icon={subModule.icon}
                        label={subModule.name}
                        value={subModule.slug} />
                    )) :
                    <Tab key={1} label="Home" value="" />
                  }
                </Tabs>
              </AppBar>
              <Hidden smDown>
                <Menu
                  id={menu}
                  variant="permanent"
                  open
                />
              </Hidden>
              <Hidden mdUp>
                <Menu
                  id={menu}
                  variant="temporary"
                  open={menuOpen}
                  onClose={this.onCloseMenu}
                  ModalProps={{
                    keepMounted: true,
                  }}
                />
              </Hidden>
            </div>
          </Router>
        )
      }
    })

export default withStyles(styles, { withTheme: true })(AppContainer)
