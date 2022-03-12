import { all, fork } from "redux-saga/effects"
import watchproduct from "../components/Product/ProductSaga"

export default function* rootSaga() {
  yield all[watchproduct]
}
