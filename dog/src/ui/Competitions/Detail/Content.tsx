import React from "react";

interface Props {
  className?: string;
}

const Content: React.FC<Props> = ({ className = "" }): React.ReactElement => {
  return <div className={`${className}`}>hey</div>;
};

export default Content;
