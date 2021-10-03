import React from "react";

const _colors: any = {
  primary: "bg-primary-purple",
  red: "bg-secondary-red",
  deepBlue: "bg-primary-deepBlue",
  darkViolet: "bg-primary-darkViolet",
};

export type ChipPropsColors = "primary" | "red" | "deepBlue" | "darkViolet";

interface Props {
  className?: string;
  color?: ChipPropsColors | undefined;
  children?: React.ReactNode;
}

const Chip: React.FC<Props> = ({
  className = "",
  children,
  color = "primary",
}): React.ReactElement => {
  const classNames = `${_colors[color]}`;

  return (
    <div
      className={`flex items-center rounded-3xl px-3 py-1 ${className} ${classNames}`}
    >
      {children}
    </div>
  );
};

export default Chip;
