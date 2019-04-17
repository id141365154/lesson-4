import { createAction } from 'redux-act';

export const typeStartTrigger = createAction('selectCountry/TYPE_START_TRIGGER')
export const renderCountryList = createAction('selectCountry/RENDER_COUNTRY_LIST')
export const renderNotFound = createAction('selectCountry/RENDER_NOT_FOUND')

