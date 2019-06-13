//import { getAPI } from './../../../api/config';
import auth from '../../../api/auth';

import {
  API_REQUEST,
  LOGIN_SUCCESS,
  API_SUCCESS,
  API_FAILURE
} from '../../../redux/constant-actions';

export const login = async ({ dispatch, email, password }) => {
  dispatch({ type: API_REQUEST });
  try {
    //const response = await getAPI().post('auth/token', { username, password });
    const response = await auth.login(email, password);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch({ type: API_SUCCESS });

    return true;
  } catch (error) {
    dispatch({ type: API_FAILURE, payload: error, error: true });
  }
};