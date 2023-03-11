import React, { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-400">
        <nav className="z-50">
          <section className="MOBILE-MENU flex lg:hidden">
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={toggleNavbar}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About us</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/portfolio">Pricing</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Products</a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>

      <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container px-6 py-4 mx-auto md:px-12">
          <div class="items-center justify-between md:flex">
            <div class="flex items-center justify-between">
              <a href="/" class="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
              </a>
              <div class="md:hidden hamburger">
                <button
                  class="text-white focus:outline-none"
                  onClick={toggleNavbar}
                >
                  <svg
                    class="w-12 h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="items-center hidden md:flex">
              <a
                href="/"
                class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300"
              >
                About us
              </a>
              <a
                href="/"
                class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300"
              >
                Pricing
              </a>
              <a
                href="/"
                class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300"
              >
                Products
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
