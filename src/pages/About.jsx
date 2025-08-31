import React from "react";

import Logos from "../components/Logos";

const About = () => {
  return (
    <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
      <div className="py-10 pb-0">
        <h1 className="text-3xl font-bold sm:text-4xl">The Road So Far</h1>
        <p className="mt-4 text-neutral-700 tracking-wide leading-relaxed indent-5">
          My journey to becoming a developer began back in 2020. After
          transitioning to work-from-home during the pandemic I was left with a
          lot of time to reevaluate many aspects of my life, particularly my
          career. In conversations with my partner about our careers and their
          respective trajectories he began to suggest that I explore software
          development and attend a coding bootcamp as he had. Though I brushed
          his suggestion off at first since I naturally gravitated towards the
          soft sciences, I began looking into free resources like The Odin
          Project and my interest was piqued.
        </p>
        <p className="mt-8 text-neutral-700 tracking-wide leading-relaxed indent-5">
          I dabbled with learning to code for the next year with enthusiasm, but
          my progress stalled without external accountability and I promised
          myself that if I couldn't make significant progress by the end of
          2021, I would attend a bootcamp. And attend a bootcamp I did! From
          January 25th 2022 to July 23rd 2022 I attended General Assembly's
          Software Engineering Immersive on a part-time basis and learned more
          in 6 months than I could have ever imagined. With the support of
          incredibly knowledgeable instructors and encouraging cohort-mates I
          acquired a new skillset and built 4 projects that I will forever be
          proud of.
        </p>
      </div>

      <div className="py-10">
        <h1 className="text-3xl font-bold sm:text-4xl">My Tech Stack</h1>
        <div className="mt-4 text-neutral-700">
          <Logos />
        </div>
      </div>
    </div>
  );
};

export default About;
