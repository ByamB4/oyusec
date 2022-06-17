/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import { FC, ReactElement, useState, ChangeEventHandler, useRef, useEffect, useCallback } from 'react'
import IconSearch from 'icons/Filled/Search'
import { InputAdornment, InputBase } from '@mui/material'
import { KeyboardShortcut } from 'components'
import { usePreference } from 'hooks'
import _, { debounce } from 'lodash'
import colors from 'theme/colors'

interface Props {
  className?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchModal: FC<Props> = ({ className = '', value, onChange }): ReactElement => {
  const [focused, setFocused] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const {
    search: { isSearch, setIsSearch },
  } = usePreference()

  const searchRoot = useRef<any>()

  const focusedClassNames = 'w-96 border-primary-purple'
  const unfocusedClassNames = 'w-56 border-transparent'

  const search = (query: string) => {
    if (query !== '') {
      // fetchAccount(query)
      // fetchNft(query)
      // fetchCollections(query)
    }
  }

  const debouncedSearchHandler = useCallback(debounce(search, 500), [])

  useEffect(() => {
    if (isSearch) {
      setFocused(true)
      searchRoot.current.focus()
    }
  }, [isSearch])

  useEffect(() => {
    if (searchValue.length === 1 && searchValue === '/') {
      setSearchValue('')
    }
    debouncedSearchHandler(searchValue)
  }, [searchValue])

  return (
    <InputBase
      id="search-root"
      className={`border-2 bg-primary-light px-2 py-1 rounded-xl transition-width transition-slowest duration-500 ease ${
        focused ? focusedClassNames : unfocusedClassNames
      } ${className}`}
      placeholder="Хайх"
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false), setIsSearch(false)
      }}
      value={value}
      inputRef={searchRoot}
      onChange={onChange}
      startAdornment={
        <InputAdornment position="start">
          <IconSearch fill={focused ? colors.text.whiteGrey : colors.text.grey} width={22} height={22} />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <KeyboardShortcut label="/" />
        </InputAdornment>
      }
    />
  )
}

export default SearchModal
