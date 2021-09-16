import React from "react";
import { Searchbar } from "components/Searchbar";
import { Button } from "@material-ui/core";
import IconGoogle from "icons/Filled/Google";
interface Props {
  className?: string;
}

const AppNavbar: React.FC<Props> = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex justify-between items-center py-3 px-5 ${className}`}
    >
      <Searchbar />
      <Button variant="contained" startIcon={<IconGoogle />}>
        Нэвтрэх
      </Button>
    </div>
  );
};

export default AppNavbar;
