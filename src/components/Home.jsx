import React from "react";

const Home = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <img
        src="images/lineArt.png"
        className="hidden lg:block"
        alt="Line drawing of woman at computer"
      />
      <img
        src="images/lineArtMobile.png"
        className="max-w-full block lg:hidden"
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
  );
};

export default Home;
