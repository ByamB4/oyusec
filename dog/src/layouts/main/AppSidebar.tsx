import IconButton from "components/IconButton";
import React from "react";
import IconHome from "icons/Lined/Home";
import IconSword from "icons/Lined/Sword";
import { colors } from "configs";

interface Props {
  className?: string;
}

const AppSidebar: React.FC<Props> = ({ className = "" }) => {
  const [activePage, setActivePage] = React.useState(0);

  return (
    <div
      className={`bg-primary-dark h-full mr-3 flex flex-col gap-8 justify-center items-center text-white ${className}`}
    >
      <div className="flex gap-2">
        <div
          className={`h-full w-5px rounded-r-3xl ${
            activePage === 0 ? "bg-secondary-orange" : "bg-transparent"
          }`}
        />
        <IconButton
          className="p-1"
          icon={
            <IconHome
              width={36}
              height={36}
              stroke={
                activePage === 0
                  ? colors.secondary.orange
                  : colors.text.darkGrey
              }
            />
          }
          onClick={() => setActivePage(0)}
        />
      </div>
      <div className="flex gap-2">
        <div
          className={`h-full w-5px rounded-r-3xl ${
            activePage === 1 ? "bg-secondary-cyan" : "bg-transparent"
          }`}
        ></div>
        <IconButton
          className="p-1"
          icon={
            <IconSword
              width={36}
              height={36}
              fill={
                activePage === 1 ? colors.secondary.cyan : colors.text.darkGrey
              }
            />
          }
          onClick={() => setActivePage(1)}
        />
      </div>
    </div>
  );
};

export default AppSidebar;
