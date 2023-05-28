import { put, take, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addLostPet(action) {
    console.log('issues');
    try {
        yield axios.post('/api/lost_found', action.payload);
        yield put({ type: 'SET_LOST_PET'});
    } catch (error) {
        console.log(`Error in addLostPET POST saga ${error}`);
    }
}

function* addLostPetSaga() {
    yield takeEvery('SET_NEW_FORM', addLostPet);
};

export default addLostPetSaga;