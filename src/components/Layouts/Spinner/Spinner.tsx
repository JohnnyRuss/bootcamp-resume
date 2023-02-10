import React from "react";

import { Spin } from "./spinner.styles";
interface SpinnerType {}

const Spinner: React.FC<SpinnerType> = (props) => {
  return <Spin />;
};

export default Spinner;
