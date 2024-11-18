import { PersonalInfoT } from "../../../store/resume.types";
interface ResumePersonalInfoType {
  personalInfo: PersonalInfoT;
}

const ResumePersonalInfo: React.FC<ResumePersonalInfoType> = ({
  personalInfo,
}) => {
  return (
    <div className="personal-details">
      {personalInfo.image && (
        <figure className="user-fig">
          <img src={personalInfo.image as string} alt="user" />
        </figure>
      )}

      <div className="user-personal--details">
        <h4 className="user__name">
          {personalInfo.name} {personalInfo.surname}
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
          {personalInfo.phone_number && (
            <div className="mobile">
              <figure>
                <img src="/assets/icons/phone.svg" alt="at @" />
              </figure>
              <span>+995 597 63 45 16</span>
            </div>
          )}
        </div>
        {personalInfo.about_me && (
          <>
            <span className="section-head about-me">ჩემს შესახებ</span>
            <blockquote className="section-description">
              {personalInfo.about_me}
            </blockquote>
          </>
        )}
      </div>
    </div>
  );
};

export default ResumePersonalInfo;
