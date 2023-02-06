import React, { useState } from "react";

import { ResumeDoneContainer } from "./styles/resume.styles";
import UserResume from "./components/UserResume";
import GoBackBTN from "./components/GoBackBTN";

const ResumeDone: React.FC = () => {
  const [openSuccess, setOpenSuccess] = useState<boolean>(true);

  return (
    <ResumeDoneContainer>
      <GoBackBTN handler={() => {}} />
      <div className="resume--wrapper">
        {/* <UserResume className="done-resume" /> */}
        {openSuccess && (
          <div className="success-modal">
            <span>რეზიუმე წარმატებით გაიგზავნა 🎉</span>
            <button className="close-btn" onClick={() => setOpenSuccess(false)}>
              <figure>
                <img src="/assets/icons/close.svg" alt="" />
              </figure>
            </button>
          </div>
        )}
      </div>
    </ResumeDoneContainer>
  );
};

export default ResumeDone;
