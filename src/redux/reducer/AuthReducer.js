import {
  SET_USER_SPENDING_LIMIT_REQUEST,
  SET_USER_SPENDING_LIMIT_SUCCESS,
  SET_USER_SPENDING_LIMIT_FAILURE,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
} from '../store/TypeConstants';

const initialState = {
  status: '',
  error: '',
  spendingLimit: {},
  userDetails: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SPENDING_LIMIT_REQUEST:
      return {
        ...state,
        status: action.type,
      };
    case SET_USER_SPENDING_LIMIT_SUCCESS:
      return {
        ...state,
        status: action.type,
        spendingLimit: action.spendingLimit,
      };
    case SET_USER_SPENDING_LIMIT_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
      };
    case GET_USER_DETAILS_REQUEST:
      return {
        ...state,
        status: action.type,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        status: action.type,
        spendingLimit: action.spendingLimit,
        userDetails: action.userDetails,
      };
    case GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        status: action.type,
        error: action.error,
      };
    default:
      return state;
  }
};

export default AuthReducer;
