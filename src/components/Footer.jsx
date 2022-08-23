import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-sage-700">
        <div className="relative max-w-screen-xl px-6 py-8 mx-auto">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center lg:justify-start">
                <a className="block text-sage-50 text-xl" href="/">
                  Larissa Vieira
                </a>
              </div>

              <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-white/75 lg:text-left">
                Created by Larissa Vieira using React and TailwindCSS, deployed
                with Firebase
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-center text-sage-300 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
