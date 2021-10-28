import React from "react";
import { styled } from "@mui/material/styles";
// import Tabs from "@mui/material/Tabs";
import { Tabs as MTabs } from "@mui/material";
import { colors } from "configs";

interface Props {
  className?: string;
  value: number;
  onChange: (event: React.SyntheticEvent, value: any) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const CusTabs = styled(MTabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: colors.secondary.blue,
    height: "3px",
    borderRadius: "5px",
  },
});

const Tabs: React.FC<Props> = ({
  className = "",
  children,
  value,
  style,
  onChange,
}): React.ReactElement => {
  return (
    <CusTabs
      style={style}
      className={`${className}`}
      value={value}
      onChange={onChange}
    >
      {children}
    </CusTabs>
  );
};

export default Tabs;
