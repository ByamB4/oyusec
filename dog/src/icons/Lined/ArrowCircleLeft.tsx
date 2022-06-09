import { FC, ReactElement, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const SvgArrowCircleLeft: FC<Props> = (props): ReactElement => {
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
      <path d="M22 12A10 10 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10m-2 0a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8m-6-5l-5 5l5 5V7z" />
    </svg>
  );
};

export default SvgArrowCircleLeft;
