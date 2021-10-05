import React from "react";
import { IconButton } from "components";

import { colors } from "configs";
import { useRouter } from "next/router";
import {
  IconHome,
  IconSword,
  IconTrophy,
  IconSettings,
  IconSchool,
  IconScript,
  IconAccount,
} from "icons/Lined";

interface Props {
  className?: string;
}

const AppSidebar: React.FC<Props> = ({
  className = "",
}): React.ReactElement => {
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
          width={32}
          height={32}
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
          width={32}
          height={32}
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
          width={32}
          height={32}
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
          width={32}
          height={32}
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
          width={32}
          height={32}
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
          width={32}
          height={32}
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
    <nav
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
            <IconButton
              className="p-1"
              onClick={() => router.push(it.link)}
              size="small"
              icon={it.icon}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className={`h-full w-5px rounded-r-3xl ${"bg-transparent"}`} />
        <IconButton
          className="p-1"
          size="small"
          icon={
            <IconSettings width={32} height={32} fill={colors.text.darkGrey} />
          }
        />
      </div>
    </nav>
  );
};

export default AppSidebar;
