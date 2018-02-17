import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import { reducer as uiReducer } from 'redux-ui'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer, LOCATION_CHANGE } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routerReducer,
  ui: uiReducer,
})

export const history = createBrowserHistory()

const store = createStore(
  rootReducer, {},
  compose(
    applyMiddleware(
      promiseMiddleware,
      routerMiddleware(history),
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export const { dispatch } = store
export default store