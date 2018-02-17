import React from 'react'
import {
  Grid, Avatar, Divider, Typography,
  Drawer
} from 'material-ui'
import { ArrowDownward } from 'material-ui-icons'
import styled from 'styled-system'
import {
  VSpace1,
  VSpace2,
  VSpace3,
  HSpace,
  HSpace2
} from "../styled-spacing"

import Menu1 from './menues/menu1'
/*
const menuFileRegexp = /\.\/menu(\d+)\.jsx?$/i
const requireCtx = require.context('./menues', false, /\.\/menu(\d+)\.jsx?$/i)
const menues = requireCtx
  .keys()
  .sort((a, b) => parseInt(a.match(menuFileRegexp)[1]) >
    parseInt(b.match(menuFileRegexp)[1]))
  .map(key => {
    let menu = requireCtx(key)
    menu = menu.default || menu
    let id = key.match(menuFileRegexp)[1]
    menu.$id = parseInt(id)
    return menu
  })
*/


const Menu = (props) => {
  const {
    id = 1,
    type,
    logo,
    open,
    width = 255,
    classes,
    anchor,
    elevation,
    ModalProps,
    slideProps,
    children,
    onClose,
    transitionDuration,
    ...restProps
  } = props
  //let Menu = menues.find(menu => menu.$id == id)
  //if (!Menu) throw new Error(`Menu No.(${id}) not found`)
  return (
    <Drawer {...{
      type,
      open,
      width,
      classes,
      anchor,
      elevation,
      ModalProps,
      slideProps,
      children,
      onClose,
      transitionDuration
    }}>
      <Grid container>
        <Grid item xs={12}>
          <HSpace2 />
          <Avatar>M</Avatar>
          <HSpace mr={108} />
          <img src={logo} width={78} height={29} />
        </Grid>
        <Grid item xs={12}>
          <Typography type="caption" p={1}>
            hendrul@gmail.com
          </Typography>
          <ArrowDownward />
          <Divider />
        </Grid>
        <Grid item xs={12}>
          {<Menu1 /> || <div>No menu found</div>}
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default Menu