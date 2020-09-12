import React from "react";
import { ContentDiv, ChildrenDiv } from "./Content.style";

const Content = ({ title, subtitle, children }) => {
  return (
    <ContentDiv>
      <h3>{title}</h3>
      <p className="desc">{subtitle}</p>
      <ChildrenDiv>{children}</ChildrenDiv>
    </ContentDiv>
  );
};

export default Content;
