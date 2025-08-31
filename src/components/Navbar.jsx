import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setNavbarOpen(false);
  };

  const closeMobileMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="bg-sage-700 fixed w-full top-0 z-50">
      <div className="px-4 lg:px-6">
        <div className="flex items-center justify-between h-[72px] w-full">
          {/* Name Links to Home */}
          <div className="flex items-center">
            <button 
              className="block text-white text-xl cursor-pointer hover:text-sage-200 transition-colors duration-300 font-['Capriola']" 
              onClick={scrollToTop}
            >
              <span>Larissa Vieira</span>
            </button>
          </div>
          
          {/* Navbar Collapse Button */}
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-sage-50 bg-sage-600 rounded-lg md:hidden hover:bg-sage-500 hover:text-white"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <nav className="hidden md:flex">
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>

            <ul className="flex text-md flex-row gap-6 font-['Capriola']">
              <li className="nav-item">
                <Link
                  activeClass="text-white scale-110"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="block text-sage-50 transform transition duration-500 hover:scale-110 hover:text-white cursor-pointer"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="text-white scale-110"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="block text-sage-50 transform transition duration-500 hover:scale-110 hover:text-white cursor-pointer"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="text-white scale-110"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="block text-sage-50 transform transition duration-500 hover:scale-110 hover:text-white cursor-pointer"
                >
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <div className="inline-flex items-stretch">
                  <button
                    className="block text-sage-50 transform transition duration-500 hover:scale-110 hover:text-white"
                    onMouseEnter={() => setDropdownOpen(true)}
                  >
                    Contact
                  </button>

                  <div className={dropdownOpen ? "relative" : " hidden"}>
                    <button type="button"></button>

                    <div
                      className="absolute -right-24 z-10 w-44 mt-4 bg-sage-600 rounded-lg shadow-lg"
                      role="menu"
                    >
                      <div
                        className="p-2"
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        <a
                          href="https://github.com/larilariv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex px-4 py-2 text-sm text-sage-50 rounded-lg transform transition duration-500 hover:scale-110 hover:text-white"
                          role="menuitem"
                        >
                          GitHub
                        </a>

                        <a
                          href="https://www.linkedin.com/in/larilari-vieira"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex px-4 py-2 text-sm text-sage-50 rounded-lg transform transition duration-500 hover:scale-110 hover:text-white"
                          role="menuitem"
                        >
                          LinkedIn
                        </a>
                        <button
                          className="inline-flex px-4 py-2 text-sm text-sage-50 transform transition duration-500 hover:scale-110 hover:text-white"
                          href="/#"
                          role="menuitem"
                          onClick={() =>
                            navigator.clipboard.writeText("lv23@nyu.edu")
                          }
                        >
                          lv23@nyu.edu
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="ml-1.5 w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item text-sage-50 hover:text-white transform transition duration-500 hover:scale-110">
                <a
                  href="https://docs.google.com/document/d/14MoJpzmsrFhzOl-pIZJPPzKux__drkmHboHfUmUJ4cw/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-sage-600 rounded-lg hover:bg-sage-500"
                >
                  <div className="relative inline-flex block">Resume</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={
          "flex flex-col justify-between px-4 pt-0 py-6 font-['Capriola'] md:hidden" +
          (navbarOpen ? "flex" : " hidden")
        }
      >
        <Link 
          to="home"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className="block px-6 py-2 text-sage-50 hover:text-white cursor-pointer"
          onClick={closeMobileMenu}
        >
          Home
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className="block px-6 py-2 text-sage-50 hover:text-white cursor-pointer"
          onClick={closeMobileMenu}
        >
          About
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          className="block px-6 py-2 text-sage-50 hover:text-white cursor-pointer"
          onClick={closeMobileMenu}
        >
          Projects
        </Link>

        <details className="group">
          <summary className="flex items-center px-6 py-2 text-sage-50 hover:text-white">
            Contact
            <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <nav className="mt-1.5 ml-8 flex flex-col">
            <a
              href="https://github.com/larilariv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-2 py-2 text-sm text-sage-50 hover:text-white"
              role="menuitem"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/larilari-vieira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-2 py-2 text-sm text-sage-50 hover:text-white"
              role="menuitem"
            >
              LinkedIn
            </a>

            <button
              className="inline-flex px-2 py-2 text-sm text-sage-50 hover:text-white"
              href="/#"
              role="menuitem"
              onClick={() => navigator.clipboard.writeText("lv23@nyu.edu")}
            >
              lv23@nyu.edu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="ml-1.5 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </nav>
        </details>

        <a
          href="https://drive.google.com/file/d/1bqQkvz2KT7nsQtsT6mCRfSBb0sT-Yj3J/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-sage-600 rounded-lg text-sage-50 hover:text-white hover:bg-sage-500"
        >
          <div className="relative inline-flex block">Resume</div>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;