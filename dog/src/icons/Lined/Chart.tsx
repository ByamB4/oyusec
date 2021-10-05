import * as React from "react";

const SvgChart = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      fill="currentColor"
      {...props}
    >
      <path d="M10.06 17.88A4.25 4.25 0 0 0 11 18a4 4 0 0 0 2.23-.68l3.22 2.87a3.88 3.88 0 0 0-.2 3.17A4 4 0 1 0 22.62 19l2.54-5.09a3.78 3.78 0 0 0 2.91-.53a4 4 0 1 0-4.69-.38l-2.54 5.09A3.86 3.86 0 0 0 20 18a4 4 0 0 0-2.23.68l-3.22-2.87a3.88 3.88 0 0 0 .2-3.17a4 4 0 1 0-6.45 4.29L4 25V2H2v26a2 2 0 0 0 2 2h26v-2H4.67zM26 8a2 2 0 1 1-2 2a2 2 0 0 1 2-2zm-4 14a2 2 0 1 1-2-2a2 2 0 0 1 2 2zM11 12a2 2 0 1 1-2 2a2 2 0 0 1 2-2z" />
    </svg>
  );
};

export default SvgChart;
