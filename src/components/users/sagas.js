import axios from 'axios';
import api from '../../shared/config/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { ADD_USER, UPDATE_USER, DELETE_USER, FETCH_USERS } from "./actionTypes";

export function* fetchUsers() {
	try {
		const users = yield call(axios.get, `${api.url}/user`);
		yield put({ type: 'FETCH_USERS_SUCCESS', payload: { users: users.data } })
	} catch (error) {
		console.log('fetchUsers error:', error.message)
	}
}

function* watchFetchUsers() {
	yield takeEvery(FETCH_USERS, fetchUsers)
}

export function* addUser(action) {
	const newUser = { ...action.payload.data, id: action.payload.id };

	try {
		yield call(axios.post, `${api.url}/user`, newUser);
		yield put({ type: FETCH_USERS });
	} catch (error) {
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
		yield call(axios.put, `${api.url}/user/${id}`, updatedUser);
		yield put({ type: FETCH_USERS });
	} catch (error) {
		console.log('updateUser error:', error.message);
	}
}

function* watchUpdateUser() {
	yield takeEvery(UPDATE_USER, updateUser)
}

export function* deleteUser(action) {
	try {
		yield call(axios.delete, `${api.url}/user/${action.payload.id}`);
		yield put({ type: FETCH_USERS })
	} catch (error) {
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
