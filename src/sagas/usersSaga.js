import { put } from 'redux-saga/effects';
import { getUsersError, getUsersRequest, getUsersSuccess } from '../actions';
import * as API from './../api';

export function * getUsersSaga () {
  // отправить экшн ACTION_TYPES.GET_USERS_REQUEST
  yield put(getUsersRequest()); // отправка екшна
  try {
    //   юзеры = загрузка()
    const { data: users } = yield API.getUsers();
    //   отправить экшн  ACTION_TYPES.GET_USERS_SUCCESS
    yield put(getUsersSuccess(users));
  } catch (e) {
    //    отправить экшн  ACTION_TYPES.GET_USERS_ERROR
    yield put(getUsersError(e));
  }
}
