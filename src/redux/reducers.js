import {
  LOGIN_SUCCESS,
  LOGOUT,
  ADD_USER,
  UPDATE_USER,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from './constant-actions';
import Constant from '../common/constants';

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
  product: productReducer
};

export default rootReducer;
