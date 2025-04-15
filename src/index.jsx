import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import Routes from './main/routes';
import App from './main/app';
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(promise, thunk),
    devTools || (f => f)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Routes>
      <App />
    </Routes>
  </Provider>,
  document.getElementById('app')
);
