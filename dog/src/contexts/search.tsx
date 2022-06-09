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
};
