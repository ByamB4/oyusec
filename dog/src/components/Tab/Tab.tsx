import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { colors } from "configs";

interface Props {
  className?: string;
  label: any;
  icon?: any;
}

const _Tab = styled((props: Props, className = "") => (
  <Tab className={`${className}`} disableRipple {...props} />
))(({ theme }) => ({
  // textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  color: colors.text.darkGrey,
  fontWeight: 600,
  "&:hover": {
    color: colors.text.grey,
    opacity: 1,
  },
  "&.Mui-selected": {
    color: `${colors.text.white} !important`,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

export default _Tab;
