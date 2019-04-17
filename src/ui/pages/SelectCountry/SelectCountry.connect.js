import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { SelectCountry } from './SelectCountry'
import { typeStartTrigger } from '@store/selectCountry/actions'
import { getCountriesList } from '@store/selectCountry/selectors'


const mapStateToProps = state => ({
  countriesList: getCountriesList(state),

})
export const SelectCountryContainer = connect(mapStateToProps, { push, typeStartTrigger, getCountriesList })(SelectCountry)