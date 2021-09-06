import * as React from "react";
import { MainLayout } from "layouts";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { NextPage, GetServerSideProps } from "next";

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
  const randomPosition = () => {
    console.log(dimension.width);
    console.log(dimension.height);
    return "50";
  };

  return (
    <MainLayout NO_PADDING>
      <div
        className="w-full h-full p-0 bg-contain bg-no-repeat rounded-3xl xl:bg-index-pattern"
        ref={rootRef}
      >
        {/* BEGIN: Patterns */}
        <div
          className="absolute animate-pulse animate-pulse"
          style={{
            top: `${randomPosition()}px`,
            left: "300px",
          }}
        >
          <Image src="/img/Home/pattern-6.png" width="110px" height="155px" />
        </div>
        <div className="absolute left-48 top-1/2">
          <Image src="/img/Home/line-1.png" width="10px" height="284px" />
        </div>
        <div className="absolute left-32 top-1/2">
          <Image src="/img/Home/line-2.png" width="10px" height="284px" />
        </div>
        <div className="absolute left-32 top-32">
          <Image src="/img/Home/line-3.png" width="10px" height="284px" />
        </div>
        <div className="absolute left-52 bottom-9">
          <Image src="/img/Home/line-solid.png" width="10px" height="284px" />
        </div>
        <div className="absolute left-2/3 top-32">
          <Image
            src="/img/Home/line-background.png"
            width="10px"
            height="10px"
            className="opacity-5"
          />
        </div>
        <div className="absolute left-2/3 top-32">
          <Image src="/img/Home/line-short.png" width="10px" height="284px" />
        </div>
        <div className="absolute left-2/3 top-3/4 animate-pulse">
          <Image src="/img/Home/square-small.png" width="110px" height="95px" />
        </div>
        {/* END: Patterns */}
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
            <Button variant="primary" size="small">
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

  return {
    props: {},
  };
};

export default Index;
