import React, { Fragment } from "react";

import { EducationT } from "../../../store/resume.types";
interface ResumeEducationType {
  education: EducationT;
}

const ResumeEducation: React.FC<ResumeEducationType> = ({ education }) => {
  return (
    <Fragment>
      <div className="label-date__container">
        {education.collage && (
          <span className="section__main-label">
            <>
              {education.collage}{" "}
              {education.degree ? `- ${education.degree}` : ""}
            </>
          </span>
        )}
        {education.endDate && (
          <span className="section__date-period">
            <>
              {education.endDate} - {education.endDate}
            </>
          </span>
        )}
      </div>
      {education.description && (
        <blockquote className="section-description">
          {education.description}
        </blockquote>
      )}
    </Fragment>
  );
};

export default ResumeEducation;
