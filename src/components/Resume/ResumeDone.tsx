import React, { useState } from "react";

import { ResumeDoneContainer } from "./resume.styles";
import UserResume from "./UserResume";
import GoBackBTN from "./GoBackBTN";

interface ResumeDoneType {}

const ResumeDone: React.FC<ResumeDoneType> = (props) => {
  const [openSuccess, setOpenSuccess] = useState<boolean>(true);

  return (
    <ResumeDoneContainer>
      <GoBackBTN handler={() => {}} />
      <div className="resume--wrapper">
        <UserResume className="done-resume" />
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
