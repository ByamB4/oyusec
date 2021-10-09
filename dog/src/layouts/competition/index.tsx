import { CSSProperties, ReactNode } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const CompLayout: React.FC<Props> = ({
  className = "",
  children,
  style,
}): React.ReactElement => {
  return (
    <>
      <div
        className={`flex flex-col gap-4 bg-primary-light1 rounded-xl p-4 ${className}`}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export default CompLayout;
