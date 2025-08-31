import React from "react";

import LineArtFull from "../assets/lineArtFull.png"
import LineArtMobile from "../assets/lineArtMobile.png"

const Home = () => {
  return (
    <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
      <section className="flex h-screen justify-center items-center">
        <img
          src={LineArtFull}
          className="hidden md:flex justify-center"
          alt="Line drawing of woman at computer"
        />
        <img
          src={LineArtMobile}
          className="flex justify-center md:hidden"
          alt="Line drawing of woman at computer"
        />
      </section>
    </div>
  );
};

export default Home;
