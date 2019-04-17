export const getCountries = state => state.countries
export const getTouchedSelect = state => state.exchange.touchedCountrySelect
export const getSelectedCountries = state => ({from: state.exchange.from, to: state.exchange.to})