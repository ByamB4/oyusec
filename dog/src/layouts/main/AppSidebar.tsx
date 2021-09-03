import IconButton from "components/IconButton";
import React from "react";
import IconHome from "icons/Lined/Home";
import IconSword from "icons/Lined/Sword";
import IconTrophy from "icons/Lined/Trophy";
import IconSettings from "icons/Lined/Settings";
import IconSchool from "icons/Outlined/School";
import IconScript from "icons/Outlined/Script";
import IconAccount from "icons/Outlined/Account";
import { colors } from "configs";

interface Props {
  className?: string;
}

const AppSidebar: React.FC<Props> = ({ className = "" }) => {
  const [activePage, setActivePage] = React.useState(0);

  const middleLinks = [
    {
      icon: (
        <IconHome
          width={36}
          height={36}
          stroke={
            activePage === 0 ? colors.secondary.orange : colors.text.darkGrey
          }
        />
      ),
      active: {
        className: "bg-secondary-orange",
      },
      passive: {
        className: "bg-transparent",
      },
    },
    {
      icon: (
        <IconSword
          width={36}
          height={36}
          fill={activePage === 1 ? colors.secondary.cyan : colors.text.darkGrey}
        />
      ),
      active: {
        className: "bg-secondary-cyan",
      },
      passive: {
        className: "bg-transparent",
      },
    },
    {
      icon: (
        <IconTrophy
          width={36}
          height={36}
          fill={activePage === 2 ? colors.secondary.pink : colors.text.darkGrey}
        />
      ),
      active: {
        className: "bg-secondary-pink",
      },
      passive: {
        className: "bg-transparent",
      },
    },
    {
      icon: (
        <IconSchool
          width={36}
          height={36}
          fill={
            activePage === 3 ? colors.secondary.neonGreen : colors.text.darkGrey
          }
        />
      ),
      active: {
        className: "bg-secondary-neonGreen",
      },
      passive: {
        className: "bg-transparent",
      },
    },
    {
      icon: (
        <IconScript
          width={36}
          height={36}
          fill={
            activePage === 4 ? colors.secondary.violet : colors.text.darkGrey
          }
        />
      ),
      active: {
        className: "bg-secondary-violet",
      },
      passive: {
        className: "bg-transparent",
      },
    },
    {
      icon: (
        <IconAccount
          width={36}
          height={36}
          fill={activePage === 5 ? colors.secondary.blue : colors.text.darkGrey}
        />
      ),
      active: {
        className: "bg-secondary-blue",
      },
      passive: {
        className: "bg-transparent",
      },
    },
  ];

  return (
    <div
      className={`bg-primary-dark h-full py-8 mr-3 flex flex-col items-center ${className}`}
    >
      <div className="flex flex-col flex-grow justify-center gap-8">
        {middleLinks.map((it, _) => (
          <div className="flex gap-2" key={_}>
            <div
              className={`h-full w-5px rounded-r-3xl ${
                activePage === _ ? it.active.className : it.passive.className
              }`}
            />
            <IconButton
              className="p-1"
              icon={it.icon}
              onClick={() => setActivePage(_)}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div
          className={`h-full w-5px rounded-r-3xl ${
            activePage === 6 ? "bg-white" : "bg-transparent"
          }`}
        />
        <IconButton
          className="p-1"
          icon={
            <IconSettings
              width={36}
              height={36}
              fill={activePage === 6 ? colors.text.white : colors.text.darkGrey}
            />
          }
          onClick={() => setActivePage(6)}
        />
      </div>
    </div>
  );
};

export default AppSidebar;