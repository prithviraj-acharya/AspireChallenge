import {put, call, fork, takeLatest, select, all} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postApi, getApiWithParam, getApi} from '../utils/helpers/ApiRequest';
import constants from '../utils/helpers/constants';
import {} from '../redux/store/TypeConstants';

const getItems = state => state.TokenReducer;

// export function* getSignin(action) {
//   const Header = {
//     Accept: 'application/json',
//     contenttype: 'application/json',
//     authorization: '',
//   };
//   try {
//     let response = yield call(postApi, 'login', action.payload, Header);
//     if (response.data.status == true) {
//       if (response.data.data.email_verified_at !== null) {
//         yield put({type: LOGIN_SUCCESS, data: response.data});
//         yield put({type: GET_USER_INFO_SUCCESS, data: response.data.data});
//         console.log({checking: response});

//         yield call(
//           AsyncStorage.setItem,
//           constants.TOKEN,
//           JSON.stringify({
//             token: response.data.access_token,
//           }),
//         );
//         yield put({
//           type: SET_TOKEN_SUCCESS,
//           token: response.data.access_token,
//         });
//       } else {
//         yield put({type: LOGIN_FAILURE, error: response.data});
//       }
//     } else {
//       yield put({type: LOGIN_FAILURE, error: response.data});
//     }
//   } catch (error) {
//     yield put({type: LOGIN_FAILURE, error: error});
//   }
// }

export default {
  source: [
    // (function* () {
    //   yield takeLatest(LOGIN_REQUEST, getSignin);
    // })(),
  ],
};
