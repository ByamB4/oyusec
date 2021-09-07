import React from "react";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import Challenge from "components/Challenge";
import { IChallenge } from "interfaces";
import CircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { colors } from "configs";

interface ICircularProgressProps extends CircularProgressProps {
  className?: string;
  backgroundColor?: string;
  color?: string | any;
}

const CusCircularProgress: React.FC<ICircularProgressProps> = (props) => {
  const {
    className = "",
    color = "#6A4BFF",
    backgroundColor = "#4E556A",
    ...rest
  } = props;

  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: backgroundColor,
        }}
        size={150}
        thickness={4}
        {...rest}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        value={20}
        sx={{
          // color: (theme) =>
          //   theme.palette.mode === "light"
          //     ? "linearGradient(90deg, #6A4BFF 0%, #2196F3 100%)"
          //     : "#308fe8",
          color: color,
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={150}
        thickness={4}
        {...rest}
      />
    </Box>
  );
};

interface Props {
  className?: string;
}

const Hero: React.FC<Props> = ({ className = "" }) => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = React.useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  React.useLayoutEffect(() => {
    if (rootRef.current) {
      setDimension({
        width: rootRef.current.offsetWidth,
        height: rootRef.current.offsetHeight,
      });
    }
  }, []);

  const randomPosition = (pos: string) => {
    switch (pos) {
      case "y":
        const value = Math.floor(Math.random() * dimension.height);
        if (value > dimension.height / 2) {
          return value - 100;
        }
        return value;
      case "x":
        return 100 + Math.floor(Math.random() * dimension.width);
      default:
        return 0;
    }
  };

  return (
    <div
      className={`w-full h-full p-0 bg-contain bg-no-repeat rounded-3xl xl:bg-index-pattern ${className}`}
      ref={rootRef}
    >
      {/* BEGIN: Patterns */}
      <div className="">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`absolute ${Math.random() < 0.5 && "animate-pulse"}`}
            style={{
              top: `${randomPosition("y")}px`,
              left: `${randomPosition("x")}px`,
            }}
          >
            <Image
              src="/img/Home/square-small.png"
              width="110px"
              height="95px"
              className={`opacity-${(Math.floor(Math.random() * 5) + 0) * 10}`}
            />
          </div>
        ))}
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            // className={`absolute ${Math.random() < 0.5 && "animate-pulse"}`}
            className="absolute"
            style={{
              top: `${randomPosition("y")}px`,
              left: `${randomPosition("x")}px`,
            }}
          >
            <Image
              src="/img/Home/line-solid.png"
              width="10px"
              height="284px"
              className={`opacity-${(Math.floor(Math.random() * 5) + 0) * 10}`}
            />
          </div>
        ))}
      </div>
      {/* END: Patterns */}
      <div className="grid grid-cols-2 h-full">
        {/* START: Content */}
        <div className="flex flex-col justify-center gap-14 p-10">
          <div className="font-museo text-7xl">
            <span className="text-white">Oyu</span>
            <span className="brand-text">Security</span>
          </div>
          <div>
            <Typography variant="h2" className="font-normal">
              Make it better place to learn, practice, compete in security field
              in 🇲🇳
            </Typography>
          </div>
          <div>
            {/* TODO: Convert me to component */}
            <Button variant="primary" size="large">
              Бүртгүүлэх
            </Button>
          </div>
        </div>
        {/* END: Content */}
        {/* START: Components */}
        <div className="relative">
          <Challenge
            challenge={fakeChallenge}
            className="absolute w-2/3"
            style={{
              top: "650px",
            }}
          />
          <div
            className="flex flex-col bg-primary-light1 items-start gap-4 absolute p-4 rounded-xl"
            style={{
              top: `50px`,
              left: `200px`,
            }}
          >
            <div className="p-2 rounded-xl relative">
              <div className="absolute top-16 left-12 text-center">
                <Typography variant="h4" className="font-bold">
                  85%
                </Typography>
                <Typography variant="body1" className="text-text-white-grey">
                  хэрэглэгч
                </Typography>
              </div>
              <CusCircularProgress
                backgroundColor={`rgba(33, 150, 243, 0.2)`}
                color={colors.secondary.blue}
              />
            </div>
            <div className="flex gap-9">
              <div className="flex flex-col gap-2">
                <Typography variant="h4">769 / 1’000</Typography>
                <Typography variant="h7" className="text-text-grey">
                  Онлайн хэрэглэгч
                </Typography>
              </div>
            </div>
          </div>
          <div
            className="flex bg-primary-light1 items-start gap-4 absolute p-4 rounded-xl"
            style={{
              top: `400px`,
              left: `300px`,
            }}
          >
            <div className="p-2 rounded-xl relative">
              <div className="absolute top-16 left-11 text-center">
                <Typography variant="h4" className="font-bold">
                  5.65%
                </Typography>
                <Typography variant="body1" className="text-text-white-grey">
                  зөв илгээлт
                </Typography>
              </div>
              <CusCircularProgress
                backgroundColor={colors.secondary.red}
                color={colors.secondary.neonGreen}
              />
            </div>
            <div className="flex gap-9">
              <div className="flex flex-col gap-2">
                <Typography variant="h4">769 / 1’000</Typography>
                <Typography variant="h7" className="text-text-grey">
                  Онлайн хэрэглэгч
                </Typography>
              </div>
            </div>
          </div>
        </div>
        {/* END: Components */}
      </div>
    </div>
  );
};

const fakeChallenge: IChallenge = {
  name: "Day 4 - Twin towers ",
};

export default Hero;
