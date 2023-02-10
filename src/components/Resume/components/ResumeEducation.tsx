import React, { Fragment } from "react";

import { EducationT } from "../../../store/resume.types";
interface ResumeEducationType {
  education: EducationT;
}

const ResumeEducation: React.FC<ResumeEducationType> = ({ education }) => {
  return (
    <Fragment>
      <div className="label-date__container">
        {(education.institute || education.degree.label) && (
          <span className="section__main-label">
            <>
              {education.institute}{" "}
              {education.institute && education.degree.label ? ", " : ""}
              {education.degree.label}
            </>
          </span>
        )}
        {education.due_date && (
          <span className="section__date-period">
            <>{education.due_date}</>
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
