import { all } from 'redux-saga/effects';
import userPageSagas from '../components/userPage/sagas';
import usersSagas from '../components/users/sagas';
import logInSagas from '../components/Login/saga'
import chatSagas from '../components/Chat/sagas'
import modalEditSagas from '../components/MessageEditModal/sagas'

export default function* rootSaga() {
    yield all([
        userPageSagas(),
        usersSagas(),
        logInSagas(),
        chatSagas(),
        modalEditSagas()
    ])
};