import React from "react";
import IconSearch from "icons/Filled/Search";
import { colors } from "configs";
import { InputAdornment, InputBase } from "@mui/material";

interface Props {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: React.FC<Props> = ({ className = "", value, onChange }) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const focusedClassNames = "w-96 border-primary-purple";
  const unfocusedClassNames = "w-56 border-transparent";

  return (
    <InputBase
      className={`border-2 bg-primary-light px-2 py-1 rounded-xl transition-width transition-slowest duration-500 ease ${
        focused ? focusedClassNames : unfocusedClassNames
      } ${className}`}
      placeholder="Хайх"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={onChange}
      startAdornment={
        <InputAdornment position="start">
          <IconSearch
            fill={focused ? colors.text.whiteGrey : colors.text.grey}
            width={22}
            height={22}
          />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
