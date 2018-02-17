import React from 'react'
//import styled from 'styled-jss'
import styled from 'styled-components'
import ss from 'styled-system'

const { color, space, width, removeProps, responsiveStyle } = ss

export default (Comp)=> {
  let Wrapped = ({alignSelf, ...props})=> {
    props = removeProps(props)
    return <Comp {...props}/>
  }
  return styled(Wrapped)`
    ${color}
    ${space}
    ${width}
    ${responsiveStyle('align-self', 'alignSelf')}
    ${responsiveStyle('height', 'height')}
  `
}
