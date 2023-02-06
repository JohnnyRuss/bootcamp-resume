import React from "react";

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
      {Object.values(resume.personalInfo)[0] && (
        <ResumePersonalInfo personalInfo={resume.personalInfo} />
      )}
      {Object.values(resume.experience[0])[0] && (
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
      {Object.values(resume.education[0])[0] && (
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
    </UserResumeContainer>
  );
};

export default UserResume;
