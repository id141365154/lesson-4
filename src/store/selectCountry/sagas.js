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
import { getTouchedSelect, getSelectedCountries} from './selectors'


import * as actions from './actions'

function* worker(action) {
    if (action.type == actions.typeStartTrigger.getType()) {
        let countryName = action.payload
        const {
            res
        } = yield all({
            res: call(fetch, `https://restcountries.eu/rest/v2/name/${countryName}?fields=name;currencies`),
            latency: delay(1000),
        })
        if (res.status === 200) {
            const r = yield call([res, res.json])
            yield put(actions.renderCountryList(r))
        } else {
            if (countryName != '') {
                yield put(actions.renderNotFound(res))
            } else {
                yield put(actions.renderHistory(res))
            }
        }
    }

    if (action.type == actions.countryChoiceTrigger.getType()) {

        let touchedSelect = yield select(getTouchedSelect)

        yield all([
            put(actions.addToHistory(action.payload)),
            put(actions.setSelectValue({ value: action.payload, select: touchedSelect })),
            put(actions.clearSearch()),
            put(actions.getCurencyTrigger()),
        ])
    }


    if (action.type == actions.getCurencyTrigger.getType()) {
        let countries = yield select(getSelectedCountries)

        if(countries.from.id!='' && countries.to.id !=''){
            let base = countries.from.id[0].code
            let symbol = countries.to.id[0].code
            try{
                const res  = yield call(fetch, `https://api.exchangeratesapi.io/latest?&base=${base}&symbols=${symbol}`)
                const r = yield call([res, res.json])
                if  (res.status == 200){
                    yield all([
                        put(actions.setExchangeRate(r)),
                        put(push('/exchange'))
                    ])
                }else{
                    console.warn(res)
                }
            }catch(e){
                alert('Oops, Can`t get curency, Try later')
            }
        }else{
            yield put(push('/exchange'))
        }
    }

}



export function* selectCountryWatcher() {
    yield takeLatest('*', worker)
}