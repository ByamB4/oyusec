import * as React from "react";

const SvgSwords = (
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M17.457 3L21 3.003l.002 3.523l-5.467 5.466l2.828 2.829l1.415-1.414l1.414 1.414l-2.474 2.475l2.828 2.829l-1.414 1.414l-2.829-2.829l-2.475 2.475l-1.414-1.414l1.414-1.415l-2.829-2.828l-2.828 2.828l1.415 1.415l-1.414 1.414l-2.475-2.475l-2.829 2.829l-1.414-1.414l2.829-2.83l-2.475-2.474l1.414-1.414l1.414 1.413l2.827-2.828l-5.46-5.46L3 3l3.546.003l5.453 5.454L17.457 3zm-7.58 10.406L7.05 16.234l.708.707l2.827-2.828l-.707-.707zm9.124-8.405h-.717l-4.87 4.869l.706.707l4.881-4.879v-.697zm-14 0v.7l11.241 11.241l.707-.707L5.716 5.002l-.715-.001z" />
    </svg>
  );
};

export default SvgSwords;
