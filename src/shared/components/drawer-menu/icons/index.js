import styled from 'styled-components'
const capitalize = str => str.split(/[\s-_]/).map(word => word[0].toUpperCase() + word.slice(1)).join('')
const filePattern = /\.\/(\w+)\.svg$/
const requireCtx = require.context('./', false, /\.\/(\w+)\.svg$/)

export default requireCtx.keys().reduce((memo, path) => {
  let StyledIcon = styled(requireCtx(path)) `
    display: block;
    color: ${({ color }) => color === undefined ? 'rgba(0, 0, 0, 0.87)' : color};
    fill: rgb(117, 117, 117);
    height: 24px;
    width: 24px;
    user-select: none;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    'position': absolute;
    'top': 0px;
    margin: 12px;
    left: 4px;
  `
  let iconName = path.match(filePattern)[1]
  iconName = capitalize(iconName) + 'Icon'
  return { ...memo, [iconName]: StyledIcon }
}, {})
