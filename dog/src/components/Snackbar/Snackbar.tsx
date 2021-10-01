import React from "react";
import { IconButton, Alert, Slide, Typography } from "@mui/material";
import IconClose from "icons/Lined/CloseCircle";

interface Props {
  variant: "success" | "error" | "warning";
  value: string;
  onClose?: () => void;
}

const variants = {
  success: "bg-primary-purple",
  error: "bg-secondary-red",
  warning: "bg-feedback-warning",
};

const SnackBar: React.FC<Props> = ({
  variant = "success",
  value,
  onClose,
}): React.ReactElement => {
  const classes = `rounded-lg flex items-center py-2 px-4 justify-between h-14 ${variants[variant]}`;

  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Alert
        className={classes}
        icon={false}
        action={
          <IconButton size="small" onClick={onClose}>
            <IconClose fill="#fff" width={28} height={28} />
          </IconButton>
        }
      >
        <Typography variant="h6">{value}</Typography>
      </Alert>
    </Slide>
  );
};

export default SnackBar;
