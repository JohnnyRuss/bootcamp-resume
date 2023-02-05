import React, { Fragment } from "react";

import { UserResumeContainer } from "./resume.styles";

interface UserResumeType {
  className?: string;
}

const UserResume: React.FC<UserResumeType> = ({ className }) => {
  return (
    <UserResumeContainer className={className || ""}>
      <div className="personal-details">
        <figure className="user-fig">
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=755"
            alt="user"
          />
        </figure>
        <div className="user-personal--details">
          <h4 className="user__name">ანზორა მუმლაძე</h4>
          <div className="email-phone__container">
            <div className="email">
              <figure>
                <img src="/assets/icons/at.svg" alt="at @" />
              </figure>
              <span>anzora@redberry.ge</span>
            </div>
            <div className="mobile">
              <figure>
                <img src="/assets/icons/phone.svg" alt="at @" />
              </figure>
              <span>+995 597 63 45 16</span>
            </div>
          </div>
          <span className="section-head about-me">ჩემს შესახებ</span>
          <blockquote className="section-description">
            ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
            გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
          </blockquote>
        </div>
      </div>
      <div className="user-info__section user-experience">
        <span className="section-head">გამოცდილება</span>
        {[1, 2].map((exp) => (
          <Fragment key={`user-resume-experience--${exp}`}>
            <div className="label-date__container">
              <span className="section__main-label">
                React Native Developer, Microsoft
              </span>
              <span className="section__date-period">
                2020-09-23 - 2020-09-23
              </span>
            </div>
            <blockquote className="section-description">
              Experienced Javascript Native Developer with 5 years in the
              industry. proficient withreact. Used problem-solving aptitude to
              encahge application performance by 14%.created data visualisation
              tools and integrated designs.
            </blockquote>
          </Fragment>
        ))}
      </div>
      <div className="user-info__section user-education">
        <span className="section-head">განათლება</span>
        {[1, 2].map((edu) => (
          <Fragment key={`user-education--resume__${edu}`}>
            <div className="label-date__container">
              <span className="section__main-label">
                წმ. ანდრიას საპატრიარქოს სასწავლებელი - სტუდენტი
              </span>
              <span className="section__date-period">
                2020-09-23 - 2020-09-23
              </span>
            </div>
            <blockquote className="section-description">
              ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
              კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
              მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
              ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
            </blockquote>
          </Fragment>
        ))}
      </div>
    </UserResumeContainer>
  );
};

export default UserResume;
