import * as React from "react";
import { MainLayout } from "layouts";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { NextPage, GetServerSideProps } from "next";
import Challenge from "components/Challenge";
import { IChallenge } from "interfaces";

interface Props {}

const Index: NextPage<Props> = ({}) => {
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
    <MainLayout NO_PADDING>
      <div
        className="w-full h-full p-0 bg-contain bg-no-repeat rounded-3xl xl:bg-index-pattern"
        ref={rootRef}
      >
        {/* BEGIN: Patterns */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="absolute animate-pulse"
            style={{
              top: `${randomPosition("y")}px`,
              left: `${randomPosition("x")}px`,
            }}
          >
            <Image
              src="/img/Home/square-small.png"
              width="110px"
              height="95px"
            />
          </div>
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="absolute animate-pulse"
            style={{
              top: `${randomPosition("y")}px`,
              left: `${randomPosition("x")}px`,
            }}
          >
            <Image
              src="/img/Home/line-solid.png"
              width="10px"
              height="284px"
              className="opacity-20"
            />
          </div>
        ))}
        {/* END: Patterns */}
        {/* START: Components */}
        <Challenge
          challenge={fakeChallenge}
          className="w-2/5 absolute bottom-1/4 right-1/4 left-1/2"
        />
        <div className="flex flex-col h-full justify-center gap-14 p-10">
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
      </div>
    </MainLayout>
  );
};

const fakeChallenge: IChallenge = {
  name: "Day 4 - Twin towers ",
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Index;
