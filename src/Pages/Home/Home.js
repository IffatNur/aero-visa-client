import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import "./Home.css";
import Process from "./Process/Process";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mx-auto">
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Process></Process>
    </div>
  );
};

export default Home;
