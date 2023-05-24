import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";


  
  
  function* fetchLostPets() {
    // get lost/found pets from DB
    try {
      const lost_found = yield axios.get('/api/lost_found');
      console.log('get all:', lost_found.data);
      yield put({ type: 'SET_LOST', payload: lost_found.data });
  
  } catch {
      console.log('get all error');
     }
  
  }

  function* LostFoundSaga() {
    yield takeEvery('FETCH_LOST', fetchLostPets);
  }

  export  default LostFoundSaga;