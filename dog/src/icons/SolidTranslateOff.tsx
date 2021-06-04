import * as React from "react";

function SvgTranslateOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.17 5.81c-.3.88-.7 1.74-1.17 2.58l1.35 1.35c.76-1.24 1.36-2.56 1.78-3.93h3.03V3.75H9.94V1.69H7.87v2.06h-1.5l2.06 2.06h3.74m3.36 7.1l1.5 1.5l.64-1.72l1.41 3.78l3.31 3.3l-3.69-9.83h-2.06l-1.11 2.97M1.31 1.31L0 2.62l1.13 1.13H.65v2.06h2.54l2.07 2.07h-.8c.75 1.68 1.78 3.27 3.07 4.7l-5.25 5.18l1.47 1.46l5.16-5.15l3.2 3.2l.69-1.84l1.3 1.29l-2.1 5.59h2.06l1.16-3.09h1.38L21.38 24l1.31-1.31L1.31 1.31z" />
    </svg>
  );
}

export default SvgTranslateOff;