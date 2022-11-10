import React from "react";
import useTitle from "../../layout/useTitle";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Process from "./Process/Process";
import Services from "./Services/Services";

const Home = () => {
  useTitle('Home');
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
