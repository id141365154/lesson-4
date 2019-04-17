import { all, fork } from 'redux-saga/effects'

import { signInWatcher } from '@store/signIn/sagas'
import { confirmWatcher } from '@store/confirm/sagas'
import { routerWatcher } from './routerWatcher'
import { exchangeWatcher } from '@store/exchange/sagas'
import { selectCountryWatcher } from '@store/selectCountry/sagas'

const watchers = [
  signInWatcher,
  confirmWatcher,
  routerWatcher,
  exchangeWatcher,
  selectCountryWatcher
]

export function* rootSaga() {
  yield all(watchers.map(fork))
}