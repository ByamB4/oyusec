import { FC, ReactElement, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const SvgTwitter: FC<Props> = (props): ReactElement => {
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
      <path d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799c-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131c4.718-.942 7.855-4.492 7.855-10.348c0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645c-.335 1.64-.5 2.352-1.214 3.331c0 7.642-4.697 11.358-9.463 12.309c-3.268.652-8.02-.419-9.382-1.841c.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037c1.158.475 1.442.465 1.973.538z" />
    </svg>
  );
};

export default SvgTwitter;
