import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'
import { routes } from '../../../routes'

export const SelectCountry = ({ push , typeStartTrigger, countriesList }) => {

  console.log(countriesList)

  return (
    <PageTemplate>
      <ModalHeader action={() => push(`${routes.EXCHANGE}`)}>
        <SearchInput onChange={typeStartTrigger} />
      </ModalHeader>
      <HBox />
      <CountriesList
        title={'История поиска'}
        list={countriesList.map(({name,code})=>({title:name, id: code}))}
        selectCountry={console.log}
      />
      <SearchStatus status="initial" />
    </PageTemplate>
  )
}

SelectCountry.propTypes = {
  push: PropTypes.func.isRequired,
  typeStartTrigger: PropTypes.func,
  countriesList: PropTypes.array,
}
