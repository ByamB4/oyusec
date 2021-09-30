import React from "react";

const _colors = {
  primary: "bg-primary-purple",
  red: "bg-secondary-red",
  deepBlue: "bg-primary-deepBlue",
  darkViolet: "bg-primary-darkViolet",
};

interface Props {
  className?: string;
  color?: "primary" | "red" | "deepBlue" | "darkViolet";
  children?: React.ReactNode;
}

const Chip: React.FC<Props> = ({
  className = "",
  children,
  color = "primary",
}) => {
  const cNames = `${_colors[color]}`;

  return (
    <div className={`flex items-center rounded-3xl px-4 py-2 ${className} ${cNames}`}>
      {children}
    </div>
  );
};

export default Chip;
