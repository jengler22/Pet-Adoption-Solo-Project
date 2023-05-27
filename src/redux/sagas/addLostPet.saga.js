import { put, take, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addLostPet() {
    try {
        const lostPet = yield axios.post('/api/lost_found');
        yield put({ type: 'SET_LOST_PET', payload: lostPet });
    } catch (error) {
        console.log(`Error in addLostPET POST saga ${error}`);
    }
}

function* addLostPetSaga() {
    yield takeEvery('SET_NEW_FORM', addLostPet);
};

export default addLostPetSaga;