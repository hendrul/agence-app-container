import React from 'react'
//import styled from 'styled-jss'
import styled from 'styled-components'
import applySS from './styled-system-hoc'

const Box = applySS((props) => <div {...props}/>)
const HBox = styled(Box)`
  display: inline
`
const spacing = [0, 8, 16, 32, 64]

export const HSpace = ({ m, mr, ml, mx, ...props }) => <HBox mr={m * 2 || mx * 2 || mr || ml || undefined} {...props} />
export const HSpace1 = () => <HBox mr={spacing[1]} />
export const HSpace2 = () => <HBox mr={spacing[2]} />
export const HSpace3 = () => <HBox mr={spacing[3]} />
export const HSpace4 = () => <HBox mr={spacing[4]} />
export const VSpace = ({ m, mb, mt, my, ...props }) => <HBox mb={m * 2 || my * 2 || mb || mt || undefined} {...props} />
export const VSpace1 = () => <Box mb={spacing[1]} />
export const VSpace2 = () => <Box mb={spacing[2]} />
export const VSpace3 = () => <Box mb={spacing[3]} />
export const VSpace4 = () => <Box mb={spacing[4]} />
