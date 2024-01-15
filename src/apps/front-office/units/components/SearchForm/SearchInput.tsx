import React from 'react'
import { SearchInputWrapper } from './style'
import TextInput from 'apps/front-office/design-system/components/Form/TextInput'
import { trans } from '@mongez/localization'

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <TextInput name="keyword" placeholder={trans('searchPlaceholder')} icon />
    </SearchInputWrapper>
  )
}

export default SearchInput