import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './main/routes';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'
const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <Routes>
    <App />
    </Routes>
  </Provider>,
  document.getElementById('app')
)
