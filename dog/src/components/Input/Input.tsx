import React from "react";
import IconClose from "icons/Filled/Close";
import {
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";

interface Props {
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: any;
  onDelete?: any;
  multiline?: boolean;
  startIcon?: React.ReactElement;
  type?: "text" | "number";
  disabled?: boolean;
  onBlur?: any;
}

const Input: React.FC<Props> = ({
  label,
  className = "",
  placeholder = "",
  value = "",
  onChange,
  onDelete,
  multiline = false,
  startIcon,
  type = "text",
  onBlur,
  disabled = false,
}) => {
  const [focused, setFocused] = React.useState(false);
  const focusedClassNames = "border-text-white";
  const unfocusedClassNames = "border-text-grey";

  return (
    <div className={`${className}`}>
      {label && (
        <InputLabel className="mb-2">
          <Typography
            variant="caption"
            className={`${focused && "text-primary-brand"}`}
          >
            {label}
          </Typography>
        </InputLabel>
      )}
      <InputBase
        multiline={multiline}
        onBlurCapture={onBlur}
        onChange={onChange}
        value={value}
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full border rounded font-medium px-2 py-1 ${
          focused ? focusedClassNames : unfocusedClassNames
        }`}
        startAdornment={
          startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          )
        }
        endAdornment={
          onDelete &&
          ("" + value).length >= 1 && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={onDelete}>
                <IconClose fill="#000" />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </div>
  );
};

export default Input;
