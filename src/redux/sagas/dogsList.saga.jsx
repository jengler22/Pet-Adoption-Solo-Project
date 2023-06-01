import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";


  
  
  function* fetchDogs() {
    // get just dogs from DB
    try {
      console.log('test1');
      const dogPage = yield axios.get('/api/dog');
      console.log('test 2');
      console.log('get Dogs:', dogPage.data);
      yield put({ type: 'SET_DOGS', payload: dogPage.data });
       console.log('3333333');
  } catch (e) {
      console.log('get all DOGS SAGA error');
     }
  
  }

  function* dogsListSaga() {
    yield takeEvery('FETCH_DOGS', fetchDogs);
  }

  export  default dogsListSaga;