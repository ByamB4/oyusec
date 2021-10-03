import * as React from "react";

const SvgSkull = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => {
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
      <path d="M12 2a9 9 0 0 0-9 9a8.99 8.99 0 0 0 4 7.47V22h2v-3h2v3h2v-3h2v3h2v-3.54c2.47-1.65 4-4.46 4-7.46a9 9 0 0 0-9-9m-4 9a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m8 0a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-4 3l1.5 3h-3l1.5-3z" />
    </svg>
  );
};

export default SvgSkull;