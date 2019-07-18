import axios from 'axios';
import api from '../../shared/config/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { ADD_USER, UPDATE_USER, DELETE_USER, FETCH_USERS, START_LOADING, FINISH_LOADING, ERROR } from "./actionTypes";

export function* fetchUsers() {
	try {
		yield put({type:START_LOADING});
		const users = yield call(axios.get, `/adminPage`);
		yield put({ type: 'FETCH_USERS_SUCCESS', payload: { users: users.data } })
		yield put({type:FINISH_LOADING});
	} catch (error) {
		yield put({type:ERROR, payload:{errorMessage:error.message}});
		console.log('fetchUsers error:', error.message)
	}
}

function* watchFetchUsers() {
	yield takeEvery(FETCH_USERS, fetchUsers)
}

export function* addUser(action) {
	const newUser = { ...action.payload.data, id: action.payload.id };

	try {
		yield put({type:START_LOADING});
		yield call(axios.post, `/adminPage/user`, newUser);
		yield put({ type: FETCH_USERS });
		yield put({type:FINISH_LOADING});
	} catch (error) {
		yield put({type:ERROR, payload:{errorMessage:error.message}});
		console.log('createUser error:', error.message);
	}
}

function* watchAddUser() {
	yield takeEvery(ADD_USER, addUser)
}

export function* updateUser(action) {
	const id = action.payload.id;
	const updatedUser = { ...action.payload.data };
	
	try {
		yield put({type:START_LOADING});
		yield call(axios.put, `adminPage/${id}`, updatedUser);
		yield put({ type: FETCH_USERS });
		yield put({type:FINISH_LOADING});
	} catch (error) {
		yield put({type:ERROR, payload:{errorMessage:error.message}});
		console.log('updateUser error:', error.message);
	}
}

function* watchUpdateUser() {
	yield takeEvery(UPDATE_USER, updateUser)
}

export function* deleteUser(action) {
	try {
		yield put({type:START_LOADING});
		yield call(axios.delete, `/adminPage/${action.payload.id}`);
		yield put({ type: FETCH_USERS });
		yield put({type:FINISH_LOADING});
	} catch (error) {
		yield put({type:ERROR, payload:{errorMessage:error.message}});
		console.log('deleteUser Error:', error.message);
	}
}

function* watchDeleteUser() {
	yield takeEvery(DELETE_USER, deleteUser)
}

export default function* usersSagas() {
	yield all([
		watchFetchUsers(),
		watchAddUser(),
		watchUpdateUser(),
		watchDeleteUser()
	])
};
