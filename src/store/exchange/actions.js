import { createAction } from 'redux-act';

export const changeTerms = createAction('exchange/CHANGE_TERMS')

export const changeFromTime = createAction('exchange/CHANGE_FROM_TIME')
export const changeToTime = createAction('exchange/CHANGE_TO_TIME')

export const changeValuesTrigger = createAction('exchange/CHANGE_VALUES_TRIGGER')
export const changeFromValue = createAction('exchange/CHANGE_FROM_VALUE')
export const changeToValue = createAction('exchange/CHANGE_TO_VALUE')

export const opentCountrySelectFrom = createAction('exchange/OPEN_COUNTRY_SELECT_FROM')
export const opentCountrySelectTo = createAction('exchange/OPEN_COUNTRY_SELECT_TO')

