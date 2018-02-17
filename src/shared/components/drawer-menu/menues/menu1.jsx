import React from 'react'
import { Divider, List } from 'material-ui'

import MenuItemLink from '../menu-item-link'
//import {
//AgenceIcon,
//ProjetosIcon,
//AdministrativoIcon,
//ComercialIcon,
//FinancieroIcon,
//UsuarioIcon,
//HelpIcon,
//ConfigurationsIcon,
//ExitIcon,
//} from '../icons'

export default props => (
  <List {...props}>
    <MenuItemLink>Agence</MenuItemLink>
    <MenuItemLink>Projetos</MenuItemLink>
    <MenuItemLink>Administrativo</MenuItemLink>
    <MenuItemLink>Comercial</MenuItemLink>
    <MenuItemLink>Financiero</MenuItemLink>
    <MenuItemLink>Usuario</MenuItemLink>
    <Divider />
    <MenuItemLink>Ajuda</MenuItemLink>
    <MenuItemLink>Configurações</MenuItemLink>
    <MenuItemLink>Sair</MenuItemLink>
  </List>
)
