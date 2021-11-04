/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react";
import { Searchbar, IconButton } from "components";
import { Button } from "@mui/material";
import Link from "next/link";
import { useToken, useUser } from "contexts/user";
import { IconBell, IconGoogle } from "icons/Filled";
import { IconShutdown } from "icons/Lined";
import { useRouter } from "next/router";

interface Props {
  className?: string;
}

const AppNavbar: React.FC<Props> = ({ className = "" }) => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const { user } = useUser();
  const { setToken } = useToken();
  const router = useRouter();

  const logout = () => {
    setToken(null);
    router.push("/");
  };

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
            <IconButton
              icon={<IconBell width={20} height={20} stroke="#fff" />}
            />
            <IconButton
              icon={<IconShutdown width={20} height={20} fill="#fff" />}
              onClick={() => logout()}
            />
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
