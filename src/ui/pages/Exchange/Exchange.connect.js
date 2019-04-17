import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import {
  getTerms,
  getFromTime,
  getToTime,
  getFromValue,
  getToValue,
  getCountryFrom,
  getCountryTo
} from '@store/exchange/selectors'
import { changeTerms, changeValuesTrigger, opentCountrySelectFrom, opentCountrySelectTo } from '@store/exchange/actions'
import { Exchange } from './Exchange'

const mapStateToProps = state => ({
  terms: getTerms(state),
  fromTime: getFromTime(state),
  toTime: getToTime(state),
  fromValue: getFromValue(state),
  toValue: getToValue(state),
  countryFrom: getCountryFrom(state),
  countryTo: getCountryTo(state)
})

export const ExchangeContainer = connect(
  mapStateToProps,
  { changeTerms, changeValuesTrigger, push,  opentCountrySelectFrom, opentCountrySelectTo  },
)(Exchange)
