/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, ReactElement, useState } from "react";
import { Searchbar, Avatar } from "components";
import { Button, Typography, Menu, MenuProps, styled } from "@mui/material";
import Link from "next/link";
import { useToken, useUser } from "contexts/user";
import { IconArrowDown, IconGoogle } from "icons/Filled";
import { useRouter } from "next/router";
import { safeUserAltText, safeUserFullName } from "utils/safe";
import { colors } from "configs";
import { v4 } from "uuid";
import { handleIcon } from "utils/handlers";

interface Props {
  className?: string;
}

const CusMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(() => ({
  "& .MuiPaper-root": {
    borderRadius: 16,
    marginTop: "8px",
    backgroundColor: colors.primary.light1,
    // color:
    //   theme.palette.mode === "light"
    //     ? "rgb(55, 65, 81)"
    //     : theme.palette.grey[300],
    // "& .MuiMenu-list": {
    //   padding: "4px 0",
    // },
    // "& .MuiMenuItem-root": {
    //   "& .MuiSvgIcon-root": {
    //     fontSize: 18,
    //     color: theme.palette.text.secondary,
    //     marginRight: theme.spacing(1.5),
    //   },
    //   "&:active": {
    //     backgroundColor: alpha(
    //       theme.palette.primary.main,
    //       theme.palette.action.selectedOpacity
    //     ),
    //   },
    // },
  },
}));

const AppNavbar: FC<Props> = ({ className = "" }): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { user } = useUser();
  const { setToken } = useToken();
  const router = useRouter();

  // const logout = () => {
  //   setToken(null);
  //   router.push("/");
  // };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const profileLinks: {
    id: string;
    icon: string;
    label: string;
    action: any;
  }[] = [
    {
      id: v4(),
      icon: "account-circle",
      label: "Профайл",
      action: {
        type: "link",
        href: "/profile",
      },
    },
    {
      id: v4(),
      icon: "shutdown",
      label: "Гарах",
      action: {
        type: "function",
        action: () => {
          setToken(null);
          router.push("/");
        },
      },
    },
  ];

  return (
    <div
      className={`w-full flex justify-between items-center py-3 px-5 ${className}`}
    >
      <Searchbar
        value={searchValue}
        onChange={(_: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(_.target.value)
        }
      />
      <div>
        {user ? (
          <>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar
                  src={user.avatar}
                  size={56}
                  alt={safeUserAltText(user)}
                />
                <Typography variant="h5">{safeUserFullName(user)}</Typography>
              </div>
              <div
                className={`rounded-full p-2 hover:cursor-pointer ${
                  open ? "bg-primary-purple" : "bg-primary-light1"
                }`}
                onClick={handleClick}
              >
                <IconArrowDown
                  className={`duration-300 ease-in-out ${
                    open && "transform rotate-180"
                  } `}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <CusMenu
              id="demo-customized-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <div className="flex flex-col gap-4 text-white p-2">
                {profileLinks.map((it) => (
                  <div
                    className="flex items-center gap-2 py-2 px-3 hover:bg-primary-purple rounded-lg hover:cursor-pointer"
                    key={it.id}
                    onClick={() => {
                      switch (it.action.type) {
                        case "link":
                          router.push(it.action.href);
                          break;
                        case "function":
                          it.action.action();
                          break;
                        default:
                          break;
                      }
                    }}
                  >
                    {handleIcon(it.icon)}
                    <Typography variant="h6">{it.label}</Typography>
                  </div>
                ))}
              </div>
            </CusMenu>
          </>
        ) : (
          <>
            <Link href={`${process.env.PUBLIC_BACKEND_API_URL}auth/google`}>
              <a style={{ all: "inherit" }}>
                <Button variant="contained" startIcon={<IconGoogle />}>
                  Нэвтрэх
                </Button>
              </a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AppNavbar;
