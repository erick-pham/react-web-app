import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/sweetalert/dist/sweetalert.css';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import LoginForm from './components/Login';
// import SignUpForm from './components/SignUp';
// import UserProfile from './components/User';
// import AdminDashboard from './components/Admin';
// import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import { PrivateRoute } from './helpers/authentication';

//import './polyfill';
//import 'react-datepicker/dist/react-datepicker.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/redux/reducers';
import sessionStorage from 'redux-persist/lib/storage/session';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';

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
// class Routing extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={App} />
//           <Route path="/login" component={LoginForm} />
//           <Route path="/signup" component={SignUpForm} />
//           <PrivateRoute path="/profile" component={UserProfile} />
//           <PrivateRoute path="/admin" component={AdminDashboard} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// ReactDOM.render(<Routing />, document.getElementById('root'));
// serviceWorker.register();