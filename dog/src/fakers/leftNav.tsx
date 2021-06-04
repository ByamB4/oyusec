import SvgSolidSword from "../icons/SolidSword";
import SvgSolidHome from "../icons/SolidHome";
import SvgSolidTrophy from "../icons/SolidTrophy";
import SvgOutlineSchool from "../icons/OutlineSchool";
import SvgSolidChart from "../icons/SolidChart";

export default [
  {
    text: "Home",
    icon: <SvgSolidHome width={24} height={24} color={"#EF6C00"} />,
    link: "/",
  },
  {
    text: "Practice",
    icon: <SvgSolidSword width={24} height={24} color={"#00E5FF"} />,
    link: "/challenges",
  },
  {
    text: "Compete",
    icon: <SvgSolidTrophy width={24} height={24} color={"#E91E63"} />,
    link: "/competitions",
  },
  {
    text: "Academy",
    icon: (
      <SvgOutlineSchool
        width={24}
        height={24}
        color={"#76FF03"}
        strokeWidth={48}
      />
    ),
    link: "/academy",
  },
  {
    text: "Scoreboard",
    icon: <SvgSolidChart width={24} height={24} color={"#F9A825"} />,
    link: "/scoreboard",
  },
];
