import { createReducer } from 'redux-act'

import * as actions from './actions'
import * as actionsSelectCountry from '@store/selectCountry/actions'

const initialState = {
    terms: false,
    fromTime: '00:00',
    toTime: '10:00',
    fromValue: '100',
    toValue: '1',
    exchangeRate: 0,
    from:{title:'Выберите страну 1', id:[{
        code:'',
        name:'',
        symbol:''
    }]},
    to:{title:'Выберите страну 1', id:[{
        code:'',
        name:'',
        symbol:''
    }]}
}

export const reducer = createReducer(
    {
        [actions.changeTerms]: state => ({
            ...state,
            terms: !state.terms,
        }),
        [actions.changeFromValue]: (state, payload) => ({
            ...state,
            fromValue: payload,
        }),
        [actions.changeToValue]: (state, payload) => ({
            ...state,
            toValue: payload,
        }),
        [actions.changeFromTime]: (state, payload) => ({
            ...state,
            fromTime: payload,
        }),
        [actions.changeToTime]: (state, payload) => ({
            ...state,
            toTime: payload,
        }),
        [actions.opentCountrySelectFrom]: (state, payload) => ({
            ...state,
            touchedCountrySelect: 'from',
        }),
        [actions.opentCountrySelectTo]: (state, payload) => ({
            ...state,
            touchedCountrySelect: 'to',
        }),
        [actionsSelectCountry.setSelectValue]: (state, payload) => {
            let newState = {...state}
            newState[payload.select] = payload.value
            return newState
        },
        [actionsSelectCountry.setExchangeRate]: (state, action) => {
            console.log(action)
            let newState = {... state}
            newState.exchangeRate = action.rates[Object.keys(action.rates)[0]]
            newState.exchangeBaseName = action.base
            newState.exchangeRateName = Object.keys(action.rates)[0]
            return newState
        },
    },
    initialState,
)
