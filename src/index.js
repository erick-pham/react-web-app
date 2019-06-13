import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/sweetalert/dist/sweetalert.css';
import './index.css';
import App from './App';

//import './polyfill';
//import 'react-datepicker/dist/react-datepicker.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/redux/reducers';
import sessionStorage from 'redux-persist/lib/storage/session';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

const config = {
  key: 'root',
  storage: sessionStorage
};

const reducer = persistCombineReducers(config, rootReducer);

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  let persistor = persistStore(store);

  return { persistor, store };
};

const { persistor, store } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);