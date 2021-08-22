import {
  SET_USER_SPENDING_LIMIT_REQUEST,
  GET_USER_DETAILS_REQUEST,
} from '../store/TypeConstants';

export const setUserSpendingLimit = payload => ({
  type: SET_USER_SPENDING_LIMIT_REQUEST,
  payload,
});

export const getUserDetails = () => ({
  type: GET_USER_DETAILS_REQUEST,
});
