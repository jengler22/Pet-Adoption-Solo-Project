import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import store from './redux/store';
import App from './components/App/App';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_LOST', fetchLostPets);
}

function* fetchLostPets() {
  // get lost/found pets from DB
  try {
    const lost_found = yield axios.get('/api/lost');
    console.log('get all:', lost_found.data);
    yield put({ type: 'SET_LOST', payload: lost_found.data });

} catch {
    console.log('get all error');
   }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const lost_found = (state = [], action) => {
  switch (action.type) {
      case 'SET_LOST':
          return action.payload;
      default:
          return state;
  }
}


const storeInstance = createStore(
  combineReducers({
      lost_found,
      
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);




const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
