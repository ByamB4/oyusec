import { FC, createContext, useState, useEffect, useContext, Dispatch, SetStateAction } from 'react'

type ThemeMode = 'dark' | 'light'

type ContextType = {
  search: {
    setIsSearch: (val: boolean) => void
    isSearch: boolean
  }
  theme: {
    isDark: boolean
    theme: ThemeMode
    setThemeMode: Dispatch<SetStateAction<ThemeMode>>
  }
}

const getThemeMode = (): ThemeMode => {
  try {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') as ThemeMode
    }
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return 'dark'
  }
}

export const SearchContext = createContext<ContextType>({} as ContextType)

export const PreferenceProvider: FC = ({ children }) => {
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [theme, setThemeMode] = useState<ThemeMode>(getThemeMode())

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.remove('light')
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleKeyPress = (event: any) => {
    if (event.key === '/') {
      if (document?.activeElement?.tagName === 'INPUT') {
        return
      }
      setIsSearch((prev) => !prev)
    }
  }

  return (
    <SearchContext.Provider
      value={{
        search: { isSearch, setIsSearch },
        theme: {
          theme,
          setThemeMode,
          isDark: theme === 'dark',
        },
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const usePreference: () => ContextType = () => {
  return useContext(SearchContext)
}
