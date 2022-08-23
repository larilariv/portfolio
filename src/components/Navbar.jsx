import React from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="sticky top-0 bg-sage-700">
      <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Name Links to Home */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white text-xl" href="/">
              <span>Larissa Vieira</span>
            </a>
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

          <nav className={"md:flex" + (navbarOpen ? " flex" : " hidden")}>
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>

            <ul
              className={
                "flex text-md" + (navbarOpen ? " flex-col" : "flex-row gap-6")
              }
            >
              <li className="nav-item">
                <a
                  className="block text-sage-50 transform transition duration-500 hover:scale-110 hover:text-white"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="block text-sage-50 transform transition duration-500 hover:scale-110 hover:text-white"
                  href="/about"
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="block text-sage-50 transform transition duration-500 hover:scale-110 hover:text-white"
                  href="/projects"
                >
                  Projects
                </a>
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
                      className="absolute right-0 z-10 w-54 mt-4 origin-top-right bg-sage-600 rounded-md shadow-lg"
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
                  href="https://drive.google.com/file/d/1bqQkvz2KT7nsQtsT6mCRfSBb0sT-Yj3J/view?usp=sharing"
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
    </div>
  );
};

export default Navbar;
