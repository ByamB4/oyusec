import { createContext, useState, FC } from "react";
import { FSType } from "../types";

// FS means fullScreen
// to is just a mutation

const FSDef: FSType = {
  isFS: false,
  toFS: () => {},
};

export const FSContext = createContext<FSType>(FSDef);

const FSProvider: FC = ({ children }) => {
  const [isFS, toFS] = useState<boolean>(FSDef.isFS);

  return (
    <FSContext.Provider value={{ isFS, toFS }}>{children}</FSContext.Provider>
  );
};

export default FSProvider;
