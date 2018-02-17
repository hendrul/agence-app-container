import React from 'react'
import { ListItem, ListItemText } from 'material-ui'
import { Link, withRouter } from 'react-router-dom'

const MenuItemLink = ({
  history,
  match,
  location,
  staticContext,
  basePath = '',
  children,
  ...props
}) => {
  let to = `${basePath}/${children.toLowerCase()}`
  return (
    <ListItem button
      onClick={(e) => {
        // Prevenir click si "to" es la ruta base del location.pathname actual
        location.pathname.startsWith(to) && e.preventDefault()
      }}
      component={Link}
      to={to}
      {...props}
    >
      <ListItemText inset primary={children} />
    </ListItem>
  )
}

export default withRouter(MenuItemLink)
