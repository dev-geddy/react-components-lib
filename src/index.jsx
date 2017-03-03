import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux' //, applyMiddleware
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import reducers from '<project-path>/reducers'

import App from './App'
import Home from './components/Home'
import About from './components/About'
import Typography from './components/Typography'
import Buttons from './components/Buttons'
import Navigation from './components/Navigation'
import Forms from './components/Forms'
import Layouts from './components/Layouts'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    // ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="typography" component={Typography} />
        <Route path="buttons" component={Buttons} />
        <Route path="navigation" component={Navigation} />
        <Route path="forms" component={Forms} />
        <Route path="layouts" component={Layouts} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
)