import { FC, ReactElement, SVGProps } from "react";

const SvgShutdown: FC<SVGProps<SVGSVGElement>> = (props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        fill="none"
        strokeWidth="2"
        d="M12 1v8M6.994 4.52a9.044 9.044 0 0 0-1.358 1.116a9 9 0 1 0 11.37-1.117"
      />
    </svg>
  );
};

export default SvgShutdown;
