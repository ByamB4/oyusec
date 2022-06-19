/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext, useState, useContext, useEffect } from 'react'

interface ISearch {
  setIsSearch: (val: boolean) => void
  isSearch: boolean
}

const SearchContext = createContext<ISearch>({
  setIsSearch: () => {},
  isSearch: false,
})

export const SearchProvider: React.FC = ({ children }): React.ReactElement => {
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const handleKeyPress = (event: any) => {
    if (event.key === '/') {
      if (document?.activeElement?.tagName === 'INPUT') {
        return
      }
      setIsSearch((prev) => !prev)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return <SearchContext.Provider value={{ setIsSearch, isSearch }}>{children}</SearchContext.Provider>
}

export const useSearch: () => {
  setIsSearch: (val: boolean) => void
  isSearch: boolean
} = () => {
  return useContext(SearchContext)
}
