import { createAction } from 'redux-act';

export const typeStartTrigger = createAction('selectCountry/TYPE_START_TRIGGER')
export const renderCountryList = createAction('selectCountry/RENDER_COUNTRY_LIST')
export const renderNotFound = createAction('selectCountry/RENDER_NOT_FOUND')
export const renderHistory = createAction('selectCountry/RENDER_HISTORY')
export const countryChoiceTrigger = createAction('selectCountry/COUNTRY_CHOICE_TRIGGER')
export const addToHistory = createAction('selectCountry/ADD_TO_HISTORY')
export const clearSearch = createAction('selectCountry/CLEAR_SEARCH')
export const setSelectValue = createAction('selectCountry/SET_SELECT_VALUE')

export const getCurencyTrigger = createAction('selectCountry/GET_CURRENCY_TRIGGER')
export const setExchangeRate = createAction('selectCountry/SET_EXCHANGE_RATE')

