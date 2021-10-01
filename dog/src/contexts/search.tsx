import React from "react";

interface ISearch {
  setIsSearch: (val: boolean) => void;
  isSearch: boolean;
}

interface Props {}

const SearchContext = React.createContext<ISearch>({
  setIsSearch: () => {},
  isSearch: false,
});

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [isSearch, setIsSearch] = React.useState<boolean>(false);
  // const searchRoot = React.useRef('search-root')

  const handleKeyPress = (event: any) => {
    if (event.key === "/") {
      if (document?.activeElement?.tagName === "INPUT") {
        return;
      }
      setIsSearch((prev) => !prev);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  // React.useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     console.log(event.key);
  //     if (event.key === "/") {
  //       console.log("toggling", isSearch);
  //       setIsSearch(false);
  //       console.log("after update", isSearch);
  //     }
  //     console.log("value", isSearch);
  //   };
  //   window.addEventListener("keydown", handleKeyPress);
  // }, []);

  return (
    <SearchContext.Provider value={{ setIsSearch, isSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch: () => {
  setIsSearch: (val: boolean) => void;
  isSearch: boolean;
} = () => {
  return React.useContext(SearchContext);
  // const { setSearch, isSearch } = React.useContext(SearchContext);

  // return { setSearch, isSearch };
};
