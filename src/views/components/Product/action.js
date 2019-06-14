import { getProductsAPI } from './../../../api/product';
import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE,
  ADD_PRODUCT
} from '../../../redux/constant-actions';

export const getProducts = async ({ dispatch }) => {
  dispatch({ type: API_REQUEST });
  try {
    const response = await getProductsAPI();
    dispatch({ type: API_SUCCESS });
    return response;
  } catch (error) {
    dispatch({ type: API_FAILURE, payload: error, error: true });
  }
};

export const addProduct = async ({ dispatch, product }) => {
  dispatch({ type: API_REQUEST });
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('test'));
        // dispatch({
        //   type: API_SUCCESS, payload: product
        // });
        resolve(product);
      }, 1000);
    });
  } catch (error) {
    dispatch({ type: API_FAILURE, payload: error, error: true });
  }
};

export const updateProduct = async ({ dispatch, product }) => {
  dispatch({ type: API_REQUEST });
  try {
    dispatch({
      type: ADD_PRODUCT, payload: product
    });
    dispatch({ type: API_SUCCESS });

    return true;
  } catch (error) {
    dispatch({ type: API_FAILURE, payload: error, error: true });
  }
};

export const deleteProduct = async ({ dispatch, product }) => {
  dispatch({ type: API_REQUEST });
  try {
    dispatch({
      type: ADD_PRODUCT, payload: product
    });
    dispatch({ type: API_SUCCESS });

    return true;
  } catch (error) {
    dispatch({ type: API_FAILURE, payload: error, error: true });
  }
};