import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";


  
  
  function* fetchDogs() {
    // get just cats from DB
    try {
      console.log('test1');
      const dogPage = yield axios.get('/api/pet');
      console.log('test 2');
      console.log('get Dogs:', dogPage.data);
      yield put({ type: 'SET_Dogs', payload: dogPage.data });
       console.log('3333333');
  } catch (e) {
      console.log('get all DOGS SAGA error');
     }
  
  }

  function* catsListSaga() {
    yield takeEvery('FETCH_DOGS', fetchDogs);
  }

  export  default catsListSaga;