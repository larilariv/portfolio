import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
      <section className="flex h-screen justify-center items-center">
        <img
          src="images/lineArtFull.png"
          className="hidden md:flex justify-center"
          alt="Line drawing of woman at computer"
        />
        <img
          src="images/lineArtMobile.png"
          className="flex justify-center md:hidden"
          alt="Line drawing of woman at computer"
        />
        {/* <img
        src="images/floralBorder.png"
        className="max-w-full"
        alt="Watercolor flowers"
      /> */}
        {/* <img
        src="images/floralBorder2.png"
        className="max-w-full"
        alt="Watercolor flowers"
      /> */}
      </section>
    </div>
  );
};

export default Home;
