import React, { Fragment } from "react";

import { ExperienceT } from "../../../store/resume.types";
interface ResumeExperienceType {
  experience: ExperienceT;
}

const ResumeExperience: React.FC<ResumeExperienceType> = ({ experience }) => {
  return (
    <Fragment>
      <div className="label-date__container">
        {(experience.position || experience.employer) && (
          <span className="section__main-label">
            <>
              {experience.position}
              {experience.position && experience.employer ? ", " : ""}
              {experience.employer}
            </>
          </span>
        )}
        {(experience.start_date || experience.due_date) && (
          <span className="section__date-period">
            <>
              {experience.start_date}{" "}
              {experience.due_date ? `- ${experience.due_date}` : ""}
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
