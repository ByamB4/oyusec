// import IconButton from "components/IconButton";
import React from "react";
import IconHome from "icons/Lined/Home";
import IconSword from "icons/Lined/Sword";
import IconTrophy from "icons/Lined/Trophy";
import IconSettings from "icons/Lined/Settings";
import IconSchool from "icons/Lined/School";
import IconScript from "icons/Lined/Script";
import IconAccount from "icons/Lined/Account";

import { colors } from "configs";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";

interface Props {
  className?: string;
}

const AppSidebar: React.FC<Props> = ({ className = "" }) => {
  const [activePage, setActivePage] = React.useState(0);
  const router = useRouter();

  const checkActivePage = (link: string) => {
    if (router.pathname === link) {
      return true;
    }
    return false;
  };
  const middleLinks = [
    {
      icon: (
        <IconHome
          width={36}
          height={36}
          stroke={
            router.pathname === "/"
              ? colors.secondary.orange
              : colors.text.darkGrey
          }
        />
      ),
      link: "/",
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
          fill={
            checkActivePage("/challenges")
              ? colors.secondary.cyan
              : colors.text.darkGrey
          }
        />
      ),
      link: "/challenges",
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
          fill={
            checkActivePage("/competitions")
              ? colors.secondary.pink
              : colors.text.darkGrey
          }
        />
      ),
      link: "/competitions",
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
            checkActivePage("/academy")
              ? colors.secondary.neonGreen
              : colors.text.darkGrey
          }
        />
      ),
      link: "/academy",
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
            checkActivePage("/writeups")
              ? colors.secondary.violet
              : colors.text.darkGrey
          }
        />
      ),
      link: "/writeups",
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
          fill={
            checkActivePage("/user")
              ? colors.secondary.blue
              : colors.text.darkGrey
          }
        />
      ),
      link: "/user",
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
                checkActivePage(it.link)
                  ? it.active.className
                  : it.passive.className
              }`}
            />
            <IconButton className="p-1" onClick={() => router.push(it.link)}>
              {it.icon}
            </IconButton>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div
          className={`h-full w-5px rounded-r-3xl ${
            activePage === 6 ? "bg-white" : "bg-transparent"
          }`}
        />
        <IconButton className="p-1" onClick={() => setActivePage(6)}>
          <IconSettings
            width={36}
            height={36}
            fill={activePage === 6 ? colors.text.white : colors.text.darkGrey}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default AppSidebar;
