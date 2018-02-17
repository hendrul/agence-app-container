import React, { Component } from 'react'
import { Equalizer, Build } from 'material-ui-icons'

import asModule from '../../shared/components/module-hoc'

class ComercialModule extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return [
      <DummySubModule icon={<Build />} name="Submodulo 1" slug="submodulo1" />,
      <DummySubModule icon={<Build />} name="Submodulo 2" slug="submodulo2" />,
      <DummySubModule icon={<Equalizer />} name="Relatorio" slug="relatorio" default />,
    ]
  }
}
const DummySubModule = () => null

export default asModule('Comercial', 'comercial')(ComercialModule)
