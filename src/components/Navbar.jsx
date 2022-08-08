import React from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <>
      <div className="bg-neutral-100">
        <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Name Links to Home */}
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-sage-500 text-xl" href="/">
                <span>Larissa Vieira</span>
              </a>
            </div>

            {/* Navbar Collapse Button */}
            <button
              className="inline-flex items-center p-2 ml-3 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
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
                    className="text-neutral-500 transition hover:text-neutral-500/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="text-neutral-500 transition hover:text-neutral-500/75"
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="text-neutral-500 transition hover:text-neutral-500/75"
                    href="/about"
                  >
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <div className="inline-flex items-stretch">
                    <a
                      className="text-neutral-500 transition hover:text-neutral-500/75"
                      href="/#"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Contact
                    </a>

                    <div className={dropdownOpen ? "relative" : " hidden"}>
                      <button type="button"></button>

                      <div
                        className="absolute right-0 z-10 w-54 mt-4 origin-top-right bg-neutral-100 rounded-md shadow-lg"
                        role="menu"
                      >
                        <div className="p-2">
                          <a
                            href="https://github.com/larilariv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex px-4 py-2 text-sm text-neutral-500 rounded-lg hover:bg-neutral-50 hover:text-neutral-700"
                            role="menuitem"
                          >
                            GitHub
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>

                          <a
                            href="https://www.linkedin.com/in/larilari-vieira"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex px-4 py-2 text-sm text-neutral-500 rounded-lg hover:bg-neutral-50 hover:text-neutral-700"
                            role="menuitem"
                          >
                            LinkedIn
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                          <a
                            className="inline-flex px-4 py-2 text-sm text-neutral-500 rounded-lg hover:bg-neutral-50 hover:text-neutral-700"
                            href="/#"
                            role="menuitem"
                          >
                            lv23@nyu.edu
                            {/* <svg
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
                            </svg> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-neutral-100 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a className="block text-sage-500 text-xl" href="/">
                <span>Larissa Vieira</span>
              </a>
              
              <button
                className="inline-flex items-center p-2 ml-3 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
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
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Share</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Tweet</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Pin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </> */}
    </>
  );
};

export default Navbar;
