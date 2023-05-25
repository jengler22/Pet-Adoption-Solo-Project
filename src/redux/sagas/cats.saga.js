import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";


  
  
  function* fetchCatsList() {
    // get just cats from DB
    try {
      const cats = yield axios.get('/api/cats');
      console.log('get all:', cats.data);
      yield put({ type: 'SET_CATS', payload: cats.data });
  
  } catch {
      console.log('get all CATS SAGA error');
     }
  
  }

  function* catsListSaga() {
    yield takeEvery('FETCH_CATS', fetchCatsList);
  }

  export  default catsListSaga;