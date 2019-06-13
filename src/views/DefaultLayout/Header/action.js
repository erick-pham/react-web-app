import {
  LOGOUT
} from '../../redux/constant-actions';

export const logout = async ({ dispatch }) => {
  dispatch({ type: LOGOUT, payload: null });
  return true;
};