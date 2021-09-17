import React from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "components/IconButton";
import IconClose from "icons/Filled/Close";

interface InputProps {
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

const Input: React.FC<InputProps> = ({
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
  const classNames = `w-full border-2 rounded font-medium px-2 py-1`;
  const focusedClassNames = "border-text-white";
  const unfocusedClassNames = "border-text-grey";

  return (
    <div className={className}>
      {label && (
        <InputLabel className="mb-2">
          <Typography
            variant="caption"
            className={clsx(`caption-bold`, {
              ["text-primary-brand"]: focused,
            })}
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
        className={`${classNames} ${
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
              <IconButton
                size="small"
                onClick={onDelete}
                icon={<IconClose fill="#000" />}
              />
            </InputAdornment>
          )
        }
      />
    </div>
  );
};

export default Input;
