import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as api from 'service/ApiService';

import {
  LOAD_USER,
  LOAD_USER_SUCCEEDED,
  LOAD_USER_FAILED,
  SAVE_USER,
  SAVE_USER_FAILED,
  SAVE_USER_SUCCEEDED,
} from './constants';

function handleError(e) {
  // FIXME
  /* eslint-disable no-console */
  console.log(e);
}

function* load(action) {
  try {
    const user = yield call(api.fetchUser, action.userId);
    yield put({ type: LOAD_USER_SUCCEEDED, user });
  } catch (e) {
    handleError(e);
    yield put({ type: LOAD_USER_FAILED, message: e.message });
  }
}

function* save(action) {
  try {
    yield call(api.saveUser, action.user, action.userId);
    yield put({ type: SAVE_USER_SUCCEEDED });
  } catch (e) {
    handleError(e);
    yield put({ type: SAVE_USER_FAILED, message: e.message });
  }
}


export default function* rootSaga() {
  yield all([
    takeLatest(LOAD_USER, load),
    takeLatest(SAVE_USER, save),
  ]);
}
