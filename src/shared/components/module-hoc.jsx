import React from 'react'
import _snakeCase from 'lodash/snakeCase'
import { withRouter } from 'react-router-dom'
import ui from 'redux-ui'

export default (moduleName, moduleSlug = _snakeCase(moduleName)) => (Component) => {
  if (!moduleName) throw new Error('Debe especificar el nombre del modulo')
  const Module =
  ui({ persist: true })(
  class Module extends React.Component {
    componentWillMount() {
      const children = new Component().render()
      const subModules = React.Children.map(children, child => ({
        icon: child.props.icon,
        name: child.props.name,
        slug: child.props.slug,
        isDefault: !!child.props.default,
        element: child,
      }))

      const activeModule = {
        name: moduleName,
        slug: moduleSlug,
        subModules,
      }

      this.props.updateUI({
        activeModule,
        activeTab: (subModules.find(smod => smod.isDefault) || {}).slug || subModules[0],
      })
    }

    render() {
      return null
    }
  })

  return withRouter(Module)
}