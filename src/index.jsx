import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './main/routes';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import App from './main/app';
import reducers from './main/reducers';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  applyMiddleware(promise, thunk)  
);

ReactDOM.render(
  <Provider store={store}>
    <Routes>
      <App />
    </Routes>
  </Provider>,
  document.getElementById('app')
);
