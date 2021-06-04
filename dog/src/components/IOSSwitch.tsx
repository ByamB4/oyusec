import SvgSolidMoon from "../icons/SolidMoon";
import {
  createStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 46,
      height: 24,
      padding: 0,
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        marginTop: "2px",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#191E2C",
          opacity: 1,
          border: "none",
        },
      },
    },
    thumb: {
      width: 18,
      padding: "5px",
      marginLeft: "2px",
      marginTop: "2px",
      height: 18,
    },
    track: {
      borderRadius: 26 / 2,
      backgroundColor: "#6C93F1",
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  })
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      checkedIcon={<SvgSolidMoon width={18} height={18} />}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default IOSSwitch;
