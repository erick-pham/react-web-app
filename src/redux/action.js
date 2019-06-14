import {
  ADD_USER,
  UPDATE_USER,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  APP_SHOW_POPUP,
} from './constant-actions';

// POPUP
export const showPopup = (type, message, status) => {
  return {
    type: APP_SHOW_POPUP,
    payload: {
      type,
      message,
      isOpen: status
    }
  };
};

// USER
export const addUser = (payload) => ({
  type: ADD_USER,
  payload: payload
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload: payload
});

// PRODUCT
export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload: payload
});

export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload: payload
});

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload: payload
});
