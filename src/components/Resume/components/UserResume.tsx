import React from "react";

import objectIncludesValue from "../../../lib/ObjectIncludesValue";

import { UserResumeContainer } from "../styles/resume.styles";
import ResumePersonalInfo from "./ResumePersonalInfo";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";

import { ResumeT } from "../../../store/resume.types";

interface UserResumeType {
  className?: string;
  resume: ResumeT;
}

const UserResume: React.FC<UserResumeType> = ({ className, resume }) => {
  return (
    <UserResumeContainer className={className || ""}>
      {objectIncludesValue(resume.personalInfo) && (
        <ResumePersonalInfo personalInfo={resume.personalInfo} />
      )}
      {objectIncludesValue(resume.experience[0]) && (
        <div className="user-info__section user-experience">
          <span className="section-head">გამოცდილება</span>
          {resume.experience.map((exp, i) => (
            <ResumeExperience
              experience={exp}
              key={`user-resume-experience--${i}`}
            />
          ))}
        </div>
      )}
      {objectIncludesValue(resume.education[0]) && (
        <div className="user-info__section user-education">
          <span className="section-head">განათლება</span>
          {resume.education.map((edu, i) => (
            <ResumeEducation
              education={edu}
              key={`user-education--resume__${i}`}
            />
          ))}
        </div>
      )}
      <figure className="logo-small">
        <img src="/assets/icons/logo-small.svg" alt="redberry logo" />
      </figure>
    </UserResumeContainer>
  );
};

export default UserResume;
