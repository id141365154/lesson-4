import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { SelectCountry } from './SelectCountry'
import { typeStartTrigger, countryChoiceTrigger } from '@store/selectCountry/actions'
import { getCountries } from '@store/selectCountry/selectors'


const mapStateToProps = state => ({
  countries: getCountries(state)
})

export const SelectCountryContainer = connect(mapStateToProps, { push, typeStartTrigger, countryChoiceTrigger, getCountries })(SelectCountry)