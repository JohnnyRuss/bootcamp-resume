import React, { Fragment } from "react";

import { ExperienceT } from "../../../store/resume.types";
interface ResumeExperienceType {
  experience: ExperienceT;
}

const ResumeExperience: React.FC<ResumeExperienceType> = ({ experience }) => {
  return (
    <Fragment>
      <div className="label-date__container">
        {experience.position && (
          <span className="section__main-label">
            <>
              {experience.position}{" "}
              {experience.employer ? `- ${experience.employer}` : ""}
            </>
          </span>
        )}
        {(experience.startDate || experience.endDate) && (
          <span className="section__date-period">
            <>
              {experience.startDate}{" "}
              {experience.endDate ? `- ${experience.endDate}` : ""}
            </>
          </span>
        )}
      </div>
      {experience.description && (
        <blockquote className="section-description">
          {experience.description}
        </blockquote>
      )}
    </Fragment>
  );
};

export default ResumeExperience;
