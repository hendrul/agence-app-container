import React from 'react'
import { render } from 'react-dom'
//import styled from 'styled-jss'
import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { Reboot } from 'material-ui'
import {
  MuiThemeProvider,
  createMuiTheme
} from 'material-ui/styles'
import { cyan } from 'material-ui/colors'

import AppContainer from './shared/components/app-container'
import { Comercial, Home } from './modules'
import store from './shared/store'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan.A400
    },
    secondary: {
      main: cyan[500]
    }
  }
})

class App extends React.PureComponent {
  render() {
    return (
      <AppContainer menu={1}>
        <Switch>
          <Route path="/comercial" component={Comercial} />
          <Route component={Home} />
        </Switch>
      </AppContainer>
    )
  }
}

render(
  <Reboot>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </Reboot> ,
  document.getElementById('root')
);
