import React from "react";
import img1 from "../img/home-img.jpg";

const Home = () => {
  return (
    <div className="container-fluid" id="about-section">
      <div className="row">
        <h1 className="text-center">Welcome To Online Voting System</h1>
      </div>
      <div className="row">
        <img className=" img-fluid" src={img1} alt="Not Found" />
      </div>
    </div>
  );
};

export default Home;
