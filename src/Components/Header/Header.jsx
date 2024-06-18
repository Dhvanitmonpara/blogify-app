import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status); 

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-400 bg-gray-900 body-font border-b-4 border-gray-800">
      <Container>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link
              to="/"
              className="flex title-font font-medium items-center text-white md:mb-0"
            >
              <Logo />
              <span className="ml-3 text-xl">Tailblocks</span>
            </Link>

            {/* Hamburger menu for mobile */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation for desktop */}
          <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
            {navItems.map((item) =>
              item.active ? (
                <Link
                  className="mr-5 hover:text-white"
                  to={item.slug}
                  key={item.name}
                >
                  {item.name}
                </Link>
              ) : null
            )}
          </nav>

          {/* Button for desktop */}
          {authStatus && <LogoutBtn />}

          {/* Sidebar menu for mobile */}
          <div
            className={`absolute top-0 left-0 h-full w-64 bg-gray-800 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <div className="p-5">
              <button onClick={toggleMenu} className="absolute top-3 right-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <nav className="mt-8">
                {navItems.map((item) =>
                  item.active ? (
                    <Link
                      className="block mb-4 hover:text-white"
                      to={item.slug}
                      key={item.name}
                    >
                      {item.name}
                    </Link>
                  ) : null
                )}
              </nav>
              {authStatus && <LogoutBtn />}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
