import { put, takeEvery, select } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, STORE_PRODUCTS } from "./constant";
import { call } from "redux-saga/effects";

//GENERATOR FUNCTION, CALLED AFTER THE THE WATCHER FUNCTION DETECTS A
//SPECIFIC ACTION DISPATCHED WITH CERTAIN KEY.
function* getProducts() {
  // If products already exist in store, skip fetching again (avoids double fetch in React StrictMode)
  const existing = yield select((state) => state.productListData);
  if (existing && existing.length) return;

  let response = yield call(fetch, "http://localhost:3000/products");
  const data = yield response.json();

  yield put({ type: STORE_PRODUCTS, data }); //NEW ACTION DISPTACHED, IT WILL SEND DATA TO REDUCER AND THEN STORE.
}

function* searchProductWroker() {
  
}

//WATCHER SAGA: WATCHES FOR ACTION CALLED WITH PROVIDED TYPE.
//THEN CALL THE GENERATOR FUNCTION FOR API CALLS AND THEN
//CALLS ANOTHER ACTION TO SEND THE API DATA BACK TO REDUCER
//ANS STORE TO BE USED IN VIEW.
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProductWorker);
}

export default productSaga;
