import { takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST } from "./constant";

function* getProducts() {
  let response = yield call(fetch, "http://localhost:3000/products");
  const data = yield response.json();
  console.log("API into saga", data);
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
