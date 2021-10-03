import React from "react";
import { Searchbar } from "components";
import { Button } from "@mui/material";
import IconGoogle from "icons/Filled/Google";

interface Props {
  className?: string;
}

const AppNavbar: React.FC<Props> = ({ className = "" }) => {
  const [sValue, setSValue] = React.useState<string>("");

  return (
    <div
      className={`w-full flex justify-between items-center py-3 px-5 ${className}`}
    >
      <Searchbar
        value={sValue}
        onChange={(_: React.ChangeEvent<HTMLInputElement>) =>
          setSValue(_.target.value)
        }
      />
      <Button variant="contained" startIcon={<IconGoogle />}>
        Нэвтрэх
      </Button>
    </div>
  );
};

export default AppNavbar;
