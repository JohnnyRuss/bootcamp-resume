import React from "react";
import { Link } from "react-router-dom";

import { HomeContainer } from "./home.styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <div className="home-head">
        <figure className="logo-fig">
          <img src="/assets/icons/logo-long.svg" alt="redberry logo" />
        </figure>
      </div>
      <figure className="stamp-fig">
        <img src="/assets/icons/stamp.svg" alt="stamp" />
      </figure>
      <Link to="/resume/personal-info" className="add-resume--btn">
        რეზიუმეს დამატება
      </Link>
    </HomeContainer>
  );
};

export default Home;
