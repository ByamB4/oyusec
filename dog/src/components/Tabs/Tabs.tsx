import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import { colors } from "configs";

interface Props {
  className?: string;
  value: number;
  onChange: (event: React.SyntheticEvent, value: any) => void;
  children?: React.ReactNode;
}

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: colors.secondary.blue,
    height: "3px",
    borderRadius: "5px",
  },
});

const _Tabs: React.FC<Props> = ({
  className = "",
  children,
  value,
  onChange,
}): React.ReactElement => {
  return (
    <AntTabs className={`${className}`} value={value} onChange={onChange}>
      {children}
    </AntTabs>
  );
};

export default _Tabs;
