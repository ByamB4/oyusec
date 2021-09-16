import React from "react";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconSearch from "icons/Filled/Search";
import { colors } from "configs";

interface Props {
  className?: string;
  value?: string;
  onChange?: any;
}
const SearchBar: React.FC<Props> = ({ className = "", value, onChange }) => {
  const [focused, setFocused] = React.useState(false);
  const classNames = `border-2 bg-primary-light rounded-lg px-2 py-1`;
  const focusedClassNames = "w-96 border-primary-purple";
  const unfocusedClassNames = "w-56 border-transparent";

  return (
    <InputBase
      className={`${classNames} ${
        focused ? focusedClassNames : unfocusedClassNames
      } ${className}`}
      placeholder="Хайх"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      // value={value}
      // onChange={(e) => onChange(e.target.value)}
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
