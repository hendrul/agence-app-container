import React, { Component } from 'react'

import asModule from '../../shared/components/module-hoc'

class HomeModule extends Component {
  render() {
    return []
  }
}

export default asModule('Home', '')(HomeModule)