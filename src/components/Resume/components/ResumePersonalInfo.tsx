import React from "react";

import { PersonalInfoT } from "../../../store/resume.types";
interface ResumePersonalInfoType {
  personalInfo: PersonalInfoT;
}

const ResumePersonalInfo: React.FC<ResumePersonalInfoType> = ({
  personalInfo,
}) => {
  return (
    <div className="personal-details">
      {personalInfo.avatar && (
        <figure className="user-fig">
          <img src={JSON.parse(personalInfo.avatar)} alt="user" />
        </figure>
      )}

      <div className="user-personal--details">
        <h4 className="user__name">
          {personalInfo.name} {personalInfo.lastName}
        </h4>
        <div className="email-phone__container">
          {personalInfo.email && (
            <div className="email">
              <figure>
                <img src="/assets/icons/at.svg" alt="at @" />
              </figure>
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.mobile && (
            <div className="mobile">
              <figure>
                <img src="/assets/icons/phone.svg" alt="at @" />
              </figure>
              <span>+995 597 63 45 16</span>
            </div>
          )}
        </div>
        {personalInfo.aboutMe && (
          <>
            <span className="section-head about-me">ჩემს შესახებ</span>
            <blockquote className="section-description">
              {personalInfo.aboutMe}
            </blockquote>
          </>
        )}
      </div>
    </div>
  );
};

export default ResumePersonalInfo;
