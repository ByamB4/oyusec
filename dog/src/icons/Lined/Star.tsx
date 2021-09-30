import * as React from "react";

function SvgStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63l-4.12-4a1 1 0 0 1-.25-1a1 1 0 0 1 .81-.68l5.7-.83l2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12l5.7.83a1 1 0 0 1 .81.68a1 1 0 0 1-.25 1l-4.12 4l1 5.63a1 1 0 0 1-.4 1a1 1 0 0 1-.62.18zM12 16.1a.92.92 0 0 1 .46.11l3.77 2l-.72-4.21a1 1 0 0 1 .29-.89l3-2.93l-4.2-.62a1 1 0 0 1-.71-.56L12 5.25L10.11 9a1 1 0 0 1-.75.54l-4.2.62l3 2.93a1 1 0 0 1 .29.89l-.72 4.16l3.77-2a.92.92 0 0 1 .5-.04z"
      />
    </svg>
  );
}

export default SvgStar;
