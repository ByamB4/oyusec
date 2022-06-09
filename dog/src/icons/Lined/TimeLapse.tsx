import { FC, ReactElement, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const SvgTimeLapse: FC<Props> = (props): ReactElement => {
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
      <g fill="none">
        <path
          d="M12 19a6.978 6.978 0 0 1-4.95-2.05L12 12V5a7 7 0 1 1 0 14z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default SvgTimeLapse;
