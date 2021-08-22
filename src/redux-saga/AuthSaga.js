import {put, call, fork, takeLatest, select, all} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postApi, getApiWithParam, getApi} from '../utils/helpers/ApiRequest';
import constants from '../utils/helpers/constants';
import {
  /** Setting if the user has a spending limit or not */
  SET_USER_SPENDING_LIMIT_REQUEST,
  SET_USER_SPENDING_LIMIT_SUCCESS,
  SET_USER_SPENDING_LIMIT_FAILURE,

  /**Getting the user data */
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
} from '../redux/store/TypeConstants';

export function* setUserSpendingLimit(action) {
  try {
    yield call(
      AsyncStorage.setItem,
      constants.TOKEN,
      JSON.stringify(action.payload),
    );

    yield put({
      type: SET_USER_SPENDING_LIMIT_SUCCESS,
      spendingLimit: action.payload,
    });
  } catch (error) {
    yield put({type: SET_USER_SPENDING_LIMIT_FAILURE, error: error});
  }
}

export function* getUserDetails() {
  try {
    let spendingLimit = yield call(AsyncStorage.getItem, constants.TOKEN);

    let response = yield call(getApi, `users/10`, {});

    yield put({
      type: GET_USER_DETAILS_SUCCESS,
      spendingLimit: JSON.parse(spendingLimit),
      userDetails: response.data.data,
    });
  } catch (error) {
    yield put({type: GET_USER_DETAILS_FAILURE, error: error});
  }
}

export default {
  source: [
    (function* () {
      yield takeLatest(SET_USER_SPENDING_LIMIT_REQUEST, setUserSpendingLimit);
    })(),
    (function* () {
      yield takeLatest(GET_USER_DETAILS_REQUEST, getUserDetails);
    })(),
  ],
};
