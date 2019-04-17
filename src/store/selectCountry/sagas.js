import { takeEvery, select, put, takeLatest, call, race, delay, all } from 'redux-saga/effects'

import * as actions from './actions'

function* worker(action) {

  console.log('action', action)
  //yield put(actions.typeStart("tres"))


  if (action.type == actions.typeStartTrigger.getType()) {
    let countryName = action.payload
    const {res} = yield all({
      res: call(fetch,`https://restcountries.eu/rest/v2/name/${countryName}?fields=name;alpha2Code`),
      latency: delay(1000),
    })
    //console.log(res)
    if (res.status ===200){
      const r = yield call([res, res.json])
      console.log(r)
      yield put(actions.renderCountryList(r))
    } else{
      yield put(actions.renderNotFound(res))
    }







  }

}





export function* selectCountryWatcher() {
  //yield takeEvery(actions.typeStartTrigger.toString(), worker)
  yield takeLatest('*', worker)
}
