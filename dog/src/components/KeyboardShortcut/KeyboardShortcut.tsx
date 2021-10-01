import React from "react";

interface Props {
  className?: string;
  label: string;
}

const KeyboardShortcut: React.FC<Props> = ({
  className = "",
  label,
}): React.ReactElement => {
  return (
    <div
      className={`bg-text-black text-white rounded-md px-2 py-1 font-fira ${className}`}
    >
      {label}
    </div>
  );
};

export default KeyboardShortcut;
