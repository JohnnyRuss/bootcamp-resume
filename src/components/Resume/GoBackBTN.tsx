import React from "react";

import { BackBTN } from "./resume.styles";

interface GoBackBTNType {
  handler: () => void;
}

const GoBackBTN: React.FC<GoBackBTNType> = ({ handler }) => {
  return (
    <BackBTN onClick={handler}>
      <figure>
        <img src="/assets/icons/back-btn.svg" alt="" />
      </figure>
    </BackBTN>
  );
};

export default GoBackBTN;
