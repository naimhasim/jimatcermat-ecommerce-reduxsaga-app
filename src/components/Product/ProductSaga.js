import { call, put, takeEvery } from "redux-saga/effects"
import {
  GET_PRODUCT_REQUESTED,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
} from "./ProductSlice"

function* handleGetProduct() {
  try {
    const product = yield call(() =>
      fetch("https://fakestoreapi.com/products/")
    )
    const formatProduct = yield product.json()
    yield put(GET_PRODUCT_SUCCESS(formatProduct))
  } catch {
    yield put(GET_PRODUCT_FAILED())
  }
}

export default function* watchproduct() {
  yield takeEvery(GET_PRODUCT_REQUESTED, handleGetProduct)
}
