import React from "react";

import { ResumeHeaderContainer } from "./styles/resume.styles";
interface HeadT {
  location: { title: string; page: number };
}

const Head: React.FC<HeadT> = ({ location }) => {
  return (
    <ResumeHeaderContainer>
      <div className="header-wrapper">
        <span className="progress-title">{location.title}</span>
        <span className="progress-step">{location.page}/3</span>
      </div>
    </ResumeHeaderContainer>
  );
};

export default Head;
