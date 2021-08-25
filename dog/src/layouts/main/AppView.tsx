import React, { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

const AppView: React.FC<Props> = ({ className = "", style, children }) => {
  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  );
};

export default AppView;
