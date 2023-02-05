import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ResumeContainer as Resume } from "./resume.styles";
import Head from "./Head";
import UserResume from "./UserResume";
import GoBackBTN from "./GoBackBTN";

interface ResumeContainerType {
  children: React.ReactNode;
}

const ResumeContainer: React.FC<ResumeContainerType> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleBack() {
    if (pathname.endsWith("/personal-info")) return;
    else navigate(-1);
  }

  return (
    <Resume>
      <GoBackBTN handler={handleBack} />

      <div className="inset-container__forms">
        <Head page={1} />
        <div className="forms-wrapper">{children}</div>
      </div>

      <div className="inset-container__resume">
        <UserResume />
        <figure className="logo-small">
          <img src="/assets/icons/logo-small.svg" alt="" />
        </figure>
      </div>
    </Resume>
  );
};

export default ResumeContainer;
