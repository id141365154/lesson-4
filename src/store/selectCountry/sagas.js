import {
  takeEvery,
  select,
  put,
  takeLatest,
  call,
  race,
  delay,
  all
} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { getTouchedSelect } from './selectors'


import * as actions from './actions'

function* worker(action) {
  if (action.type == actions.typeStartTrigger.getType()) {
    let countryName = action.payload
    const {
      res
    } = yield all({
        res: call(fetch, `https://restcountries.eu/rest/v2/name/${countryName}?fields=name;alpha2Code`),
        latency: delay(1000),
      })
    if (res.status === 200) {
      const r = yield call([res, res.json])
      yield put(actions.renderCountryList(r))
    } else {
        if ( countryName != '') {
            yield put(actions.renderNotFound(res))
        }else{
            yield put(actions.renderHistory(res))
        }
    }
  }

  if (action.type == actions.countryChoiceTrigger.getType()){

    let touchedSelect = yield select(getTouchedSelect)
    
    yield all([
        put(actions.addToHistory(action.payload)),
        put(actions.setSelectValue({value:action.payload, select:touchedSelect})),
        put(actions.clearSearch()),
        put(push('/exchange'))
    ])
  }

}


export function* selectCountryWatcher() {
  yield takeLatest('*', worker)
}