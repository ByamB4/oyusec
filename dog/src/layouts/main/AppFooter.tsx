import React from "react";

interface Props {
  className?: string;
}

const AppFooter: React.FC<Props> = ({ className = "" }) => {
  return <div className={`${className}`}>footer</div>;
};

export default AppFooter;
