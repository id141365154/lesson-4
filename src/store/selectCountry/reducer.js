import { createReducer } from 'redux-act'

import * as actions from './actions'

const initialState = {
}

export const reducer = createReducer(
  {
    [actions.renderCountryList]: (state, action) => ({
      ...state,
      countries: action,
    }),
    [actions.renderNotFound]: (state, action) => ({
      ...state,
      countriesErr: true,
    }),
  },
  initialState,
)
