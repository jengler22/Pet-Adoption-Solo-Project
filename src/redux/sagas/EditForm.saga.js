import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* editForm(action) {
    try {
        yield axios.put(`/api/lost_found/`, action.payload.id, action.payload);
    } catch (error) {
        console.log(`Error in PUT for editform`, error);
    }
}


function* editFormSaga() {
    yield takeEvery('UPDATE_FORM', editForm)
}

export default editFormSaga;