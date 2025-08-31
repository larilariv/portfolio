import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-sage-700">
        <div className="relative max-w-screen-xl px-6 py-4">
          <div className="lg:flex lg:items-end lg:justify-between">
              <p className="text-md leading-relaxed text-center text-white/75 ls:text-left">
                Created by Larissa Vieira using React and TailwindCSS, deployed
                with Firebase
              </p>
              <p className="text-sm leading-relaxed text-center text-sage-300 lg:text-right">
                Copyright &copy; 2025. All rights reserved.
              </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
