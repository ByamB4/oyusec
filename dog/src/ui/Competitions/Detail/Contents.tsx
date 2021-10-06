import React from "react";
import { ICompetitionTabContent } from "interfaces";
import { ContentAbout, ContentPrize, ContentRules } from "./Content";

interface Props {
  className?: string;
  contents: ICompetitionTabContent[];
}

const Content: React.FC<Props> = ({
  className = "",
  contents,
}): React.ReactElement => {
  return (
    <div
      className={`flex flex-col gap-4 bg-primary-light1 rounded-xl p-4 ${className}`}
    >
      {contents.map((content: ICompetitionTabContent) => (
        <React.Fragment key={content.id}>
          {content.type.key === "about" && <ContentAbout content={content} />}
          {content.type.key === "rule" && <ContentRules content={content} />}
          {content.type.key === "prize" && <ContentPrize content={content} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Content;
