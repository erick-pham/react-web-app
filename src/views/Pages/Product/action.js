//import { getAPI } from './../../../api/config';
import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE,
  ADD_PRODUCT,
  LOGIN_OUT
} from '../../redux/constant-actions';

export const logout = async ({ dispatch }) => {
  try {
    //const response = await getAPI().post('auth/token', { username, password });
    dispatch({ type: LOGIN_OUT });

    return true;
  } catch (error) {
    dispatch({ type: API_FAILURE, payload: error, error: true });
  }
};

export const addProduct = async ({ dispatch, product }) => {
  dispatch({ type: API_REQUEST });
  try {
    // const response = await getAPI().post('auth/token', {
    //   username: userName,
    //   password,
    //   metadata: {
    //     device: ''
    //   }
    // });

    dispatch({
      type: ADD_PRODUCT, payload: product
    });
    dispatch({ type: API_SUCCESS });

    return true;
  } catch (error) {
    dispatch({ type: API_FAILURE, payload: error, error: true });
  }
};