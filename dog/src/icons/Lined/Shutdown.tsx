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
      viewBox="0 0 26 26"
      fill="currentColor"
      {...props}
    >
      <path d="M13 0a2 2 0 0 0-2 2v10a2 2 0 0 0 4 0V2a2 2 0 0 0-2-2zM5.844 2.594a1.5 1.5 0 0 0-.782.344A12.796 12.796 0 0 0 .188 13C.188 20.058 5.94 25.813 13 25.813c7.06 0 12.813-5.755 12.813-12.813c0-4.073-1.902-7.717-4.875-10.063a1.5 1.5 0 1 0-1.875 2.344A9.804 9.804 0 0 1 22.813 13A9.789 9.789 0 0 1 13 22.813A9.789 9.789 0 0 1 3.187 13c0-3.138 1.471-5.92 3.75-7.719a1.5 1.5 0 0 0-1.093-2.687z" />
    </svg>
  );
};

export default SvgShutdown;
