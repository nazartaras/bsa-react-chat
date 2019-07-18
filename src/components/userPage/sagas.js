import axios from 'axios';
import api from '../../shared/config/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_SUCCESS, START_LOADING, FINISH_LOADING,ERROR } from "./actionTypes";

export function* fetchUser(action) {
    try {
        yield put({type:START_LOADING});
        const user = yield call(axios.get, `${action.payload.id}`);
        yield put({ type: FETCH_USER_SUCCESS, payload: { userData: user.data } })
        yield put({type:FINISH_LOADING});
    } catch (error) {
        yield put({type:ERROR, payload:{errorMessage:"Failed to fetch user by id"}});
        console.log('fetchUsers error:', error.message)
    }
}

function* watchFetchUser() {
    yield takeEvery(FETCH_USER, fetchUser)
}

export default function* userPageSagas() {
    yield all([
        watchFetchUser()
    ])
};
