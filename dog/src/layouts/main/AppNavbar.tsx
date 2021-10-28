import React from "react";
import { Searchbar } from "components";
import { Button } from "@mui/material";
import IconGoogle from "icons/Filled/Google";
import Link from "next/link";

interface Props {
  className?: string;
}

const AppNavbar: React.FC<Props> = ({ className = "" }) => {
  const [searchValue, setSearchValue] = React.useState<string>("");

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
        <Link href={`${process.env.PUBLIC_BACKEND_API_URL}auth/google`}>
          <a style={{ all: "inherit" }}>
            <Button variant="contained" startIcon={<IconGoogle />}>
              Нэвтрэх
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AppNavbar;
