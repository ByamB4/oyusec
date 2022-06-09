import React from "react";
import { ICompetitionTabContent } from "interfaces";
import { ContentAbout, ContentPrize, ContentRules } from "./Content";
import { CompLayout } from "layouts";

interface Props {
  className?: string;
  contents: ICompetitionTabContent[];
}

const Content: React.FC<Props> = ({
  className = "",
  contents,
}): React.ReactElement => {
  return (
    <CompLayout className={`${className}`}>
      {contents.map((content: ICompetitionTabContent) => (
        <React.Fragment key={content.id}>
          {content.type.key === "about" && <ContentAbout content={content} />}
          {content.type.key === "rule" && <ContentRules content={content} />}
          {content.type.key === "prize" && <ContentPrize content={content} />}
        </React.Fragment>
      ))}
    </CompLayout>
  );
};

export default Content;
