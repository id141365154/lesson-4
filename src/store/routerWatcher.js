import { take, delay, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { routes } from '../routes'

import * as signInTypes from '@store/signIn/types'
import * as signInActions from '@store/signIn/actions'
import * as confirmTypes from '@store/confirm/types'
import * as confirmActions from '@store/confirm/actions'

export function* routerWatcher() {
  while(true) {
    const action = yield take('*')
    if (action.type === signInTypes.DONE) {
      yield delay(1000)
      yield put(signInActions.resetState())
      yield put(push(routes.CONFIRM))
    }
    if (action.type === confirmTypes.DONE) {
      yield delay(1000)
      yield put(confirmActions.resetState())
      yield put(push(routes.EXCHANGE))
    }
  }
}