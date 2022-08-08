import React from "react";

const About = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-6 lg:px-8">
      <a
        href="https://drive.google.com/file/d/1bqQkvz2KT7nsQtsT6mCRfSBb0sT-Yj3J/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTRfszzsO2uY0lT2H-0rfJBIGEQHzyZPhNHQ2fyaNIdTCpjjly-wfX-7mGaReYsSgF5RDHiZPa1rfoX/pub?embedded=true"
        title="Resume"
        className="w-full aspect-video md:aspect-square"
      ></iframe>
    </div>
  );
};

export default About;
