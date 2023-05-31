import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";


  
  
  function* fetchCats() {
    // get just cats from DB
    try {
      console.log('test1');
      const catPage = yield axios.get('/api/pet');
      console.log('test 2');
      console.log('get cats:', catPage.data);
      yield put({ type: 'SET_CATS', payload: catPage.data });
       console.log('3333333');
  } catch (e) {
      console.log('get all CATS SAGA error');
     }
  
  }

  function* catsListSaga() {
    yield takeEvery('FETCH_CATS', fetchCats);
  }

  export  default catsListSaga;