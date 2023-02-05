import React from "react";
import { Outlet } from "react-router-dom";

import Resume from "../components/Resume/Resume";

const ResumePage: React.FC = () => {
  return (
    <Resume>
      <Outlet />
    </Resume>
  );
};

export default ResumePage;
