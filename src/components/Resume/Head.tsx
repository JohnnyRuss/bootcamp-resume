import React from "react";

import { ResumeHeaderContainer } from "./resume.styles";

interface HeadType {
  page: number;
}

const Head: React.FC<HeadType> = (props) => {
  return (
    <ResumeHeaderContainer>
      <div className="header-wrapper">
        <span className="progress-title">პირადი ინფო</span>
        <span className="progress-step">1/3</span>
      </div>
    </ResumeHeaderContainer>
  );
};

export default Head;
