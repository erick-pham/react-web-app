import {
  ADD_USER,
  UPDATE_USER,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from './constant-actions';

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
