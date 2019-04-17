import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'
import { routes } from '../../../routes'

export const SelectCountry = ({ push , typeStartTrigger, countries, countryChoiceTrigger }) => {
  return (
    <PageTemplate>
      <ModalHeader action={() => push(`${routes.EXCHANGE}`)}>
        <SearchInput value={countries.q} onChange={typeStartTrigger} />
      </ModalHeader>
      <HBox />
      {
          countries.countries.length == 0
          ? <CountriesList
            title={'История поиска'}
            list={countries.history.slice(0,5)}
            selectCountry={countryChoiceTrigger}
            />
          : null
        }

    {countries.countries.length>0
      ? <>
        <CountriesList
        title={'Результаты'}
        list={countries.countries.map(({name,alpha2Code})=>({title:name, id: alpha2Code}))}
        selectCountry={countryChoiceTrigger}
        />
      </>
      : <SearchStatus status={countries.countriesErr ? 'notFound' : 'initial'} />
    }
    </PageTemplate>
  )
}

SelectCountry.propTypes = {
  push: PropTypes.func.isRequired,
  typeStartTrigger: PropTypes.func,
  countriesList: PropTypes.array,
  countryChoiceTrigger: PropTypes.func
}
