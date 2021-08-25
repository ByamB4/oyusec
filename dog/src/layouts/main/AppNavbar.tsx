import React from "react";

interface Props {
  className?: string;
}

const AppNavbar: React.FC<Props> = ({ className = "" }) => {
  return <div className={`${className}`}>navbar</div>;
};

export default AppNavbar;
