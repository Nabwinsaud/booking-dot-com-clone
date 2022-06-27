import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Explore from "./Explore";
import Information from "./Information";
// import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* Explore section */}
      <div className="explore">
        <Information />
        <Explore />
      </div>
    </div>
  );
};

export default Home;
