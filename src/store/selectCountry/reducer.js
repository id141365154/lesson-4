import { createReducer } from 'redux-act'

import * as actions from './actions'

const initialState = {
    q:'',
    countriesErr: false,
    countries:'',
    history:[]
}

export const reducer = createReducer(
  {
    [actions.typeStartTrigger]: (state, action) => ({
        ...state,
        q: action
    }),
    [actions.renderCountryList]: (state, action) => ({
      ...state,
      countries: action,
      countriesErr: false,
    }),
    [actions.renderNotFound]: (state, action) => ({
      ...state,
      countriesErr: true,
      countries:''
    }),
    [actions.renderHistory]: (state, action) => ({
        ...state,
        countriesErr: false,
        countries:''
    }),
    [actions.addToHistory]: (state, action) => {
        let newState = {... state}
        
        let pureHistory  = newState.history.filter(item=>{
            return item.id == action.id ? false : true
        })
        pureHistory.unshift(action)
        newState.history = pureHistory
        return newState
    },
    [actions.clearSearch]: (state, action) => {
        let newState = {... state}
        newState.q = ''
        newState.countries = ''
        newState.countriesErr = false
        return newState
    },
  },
  initialState,
)
