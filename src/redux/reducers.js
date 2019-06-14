import {
  LOGIN_SUCCESS,
  LOGOUT,
  ADD_USER,
  UPDATE_USER,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  APP_SHOW_POPUP,
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE
} from './constant-actions';
import Constant from '../common/constants';

// fetch API
export const apiReducer = (state = {}, action) => {
  switch (action.type) {
    case API_REQUEST:
      console.log(action.type);
      return {
        ...state,
        isLoading: true
      };
    case API_SUCCESS:
      console.log(action.type);
      return {
        ...state,
        isLoading: false
      };
    case API_FAILURE:
      console.log(action.type);
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const popupReducer = (state = {}, action) => {
  switch (action.type) {
    case APP_SHOW_POPUP:
      return {
        ...state,
        popup: action.payload
      };
    default:
      return state;
  }
};

const loadingReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) { return state; }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'REQUEST'
  };
};

export const errorReducer = (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (!matches) { return state; }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? payload.message : ''
  };
};

const authReducer = (state = { token: localStorage.getItem(Constant.AUTHORIZATION) || '' }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem(Constant.AUTHORIZATION, action.payload);
      state = {
        ...state,
        token: action.payload
      };
      break;
    case LOGOUT:
      localStorage.removeItem(Constant.AUTHORIZATION);
      state = {
        ...state,
        token: ''
      };
      break;
    default:
      break;
  }
  return state;
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      state = {
        ...state,
        user: action.payload
      };
      break;
    case UPDATE_USER:
      state = {
        ...state,
        user: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

const productReducer = (state = {}, action) => {
  switch (action.type) {
    // case GET_PRODUCT_LIST:
    //   state = {
    //     ...state,
    //     product: action.payload
    //   };
    //   break;
    case ADD_PRODUCT:
      state = {
        ...state,
        product: action.payload
      };
      break;
    case UPDATE_PRODUCT:
      state = {
        ...state,
        product: action.payload
      };
      break;
    case DELETE_PRODUCT:
      state = {
        ...state,
        product: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};


const rootReducer = {
  loadingReducer: loadingReducer,
  errorReducer: errorReducer,
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  popup: popupReducer,
  api: apiReducer
};

export default rootReducer;
