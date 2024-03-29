import { FC, ReactElement, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const SvgSword: FC<Props> = (props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2.5 -2.5 24 24"
      width="24"
      height="24"
      preserveAspectRatio="xMinYMin"
      {...props}
    >
      <path d="M6.778 10.728l1.414 1.414 8.436-8.435-.236-1.179-1.178-.236-8.436 8.436zM3.95 16.385a1 1 0 0 1-1.414 1.414L1.12 16.385a1 1 0 0 1 1.415-1.414l2.828-2.829-1.414-1.414a1 1 0 0 1 1.414-1.414L14.556.12l3.536.707.707 3.536-9.192 9.192a1 1 0 1 1-1.415 1.415l-1.414-1.415-2.828 2.829z" />
    </svg>
  );
};

export default SvgSword;
