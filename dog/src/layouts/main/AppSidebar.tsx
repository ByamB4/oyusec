import { FC, ReactElement } from "react";
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
} from "icons/Lined";
import { v4 } from "uuid";

interface Props {
  className?: string;
}

const AppSidebar: FC<Props> = ({ className = "" }): ReactElement => {
  const router = useRouter();

  const checkActivePage = (cur: string) =>
    cur.split("/")[1] === router.asPath.split("/")[1];

  const middleLinks: {
    id: string;
    icon: ReactElement;
    link: string;
    active: { className: string };
    passive: { className: string };
  }[] = [
    {
      id: v4(),
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
      id: v4(),
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
      id: v4(),
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
      id: v4(),
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
      id: v4(),
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
  ];

  return (
    <nav
      className={`bg-primary-dark h-full py-8 mr-3 flex flex-col items-center ${className}`}
    >
      <div className="flex flex-col flex-grow justify-center gap-8">
        {middleLinks.map((it) => (
          <div className="flex gap-2" key={it.id}>
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
