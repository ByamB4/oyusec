import { FC, ReactElement, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const SvgFileSearch: FC<Props> = (props): ReactElement => {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9a6.478 6.478 0 0 1-.36-9.18C13.69 9.5 17.33 9.13 20 11V8l-6-6m-1 7V3.5L18.5 9H13m7.31 9.9c1.33-2.11.69-4.9-1.4-6.22c-2.11-1.33-4.91-.68-6.22 1.4c-1.34 2.11-.69 4.89 1.4 6.22c1.46.93 3.32.93 4.79.02L22 23.39L23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5z" />
    </svg>
  );
};

export default SvgFileSearch;
