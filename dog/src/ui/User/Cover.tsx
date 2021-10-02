import React from "react";

interface Props {
  className?: string;
}

const UserCover: React.FC<Props> = ({ className = "" }): React.ReactElement => {
  return <div className={`${className}`}>user-cover</div>;
};

export default UserCover;
