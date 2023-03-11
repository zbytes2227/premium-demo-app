import React, { useState } from "react";

function Sidebar(props) {
  const [Sidebar, setSidebar] = useState(false);

  const handleClick = (buttonName) => {
    props.setActiveButton(buttonName);
    setSidebar(false)
  };

  const toggleSidebar = () => {
    setSidebar(!Sidebar);
  };


  async function logoutAdmin() {
    const api_data = await fetch("/api/admin/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await api_data.json();
    if(data.success){
      window.location.reload();
    }
  }


  return (
    <>
      <div className="flex items-center dark:bg-gray-800 sm:hidden justify-between bg-gray-200 w-full p-2">
        <button
          className={`${Sidebar ? "hidden" : ""} border dark:border-0 dark:text-white`}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <button
          className={`${Sidebar ? "" : "hidden"} border dark:border-0 dark:text-white`}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
        <h2 className="text-3xl dark:text-white text-bold px-3">Dashboard</h2>
      </div>

      <div
        class={`bg-white ${
          Sidebar ? "" : "hidden"
        } sm:block dark:bg-gray-800 w-fit`}
      >
        <div class="flex flex-col sm:flex-row sm:justify-around w-fit">
          <div class="h-screen w-72">
            <div class="flex items-center justify-start mx-6 mt-6">
              <img
                class="h-10"
                src="https://images.pexels.com/photos/15792560/pexels-photo-15792560.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="k"
              />
              <span class="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
                Admin Panel
              </span>
            </div>
            <nav class="mt-10 px-6 ">
              <button
                class={`${
                  props.activeButton === "HOME"
                    ? "dark:bg-gray-600 bg-gray-200"
                    : ""
                } hover:text-gray-800 hover:bg-gray-100 w-full flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg `}
                onClick={() => handleClick("HOME")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
                <span class="mx-4 text-lg font-normal">HOME</span>
                <span class="flex-grow text-right"></span>
              </button>
              <button
                class={`${
                  props.activeButton === "CONTACTS"
                    ? "dark:bg-gray-600 bg-gray-200"
                    : ""
                } hover:text-gray-800 hover:bg-gray-100 w-full flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg `}
                onClick={() => handleClick("CONTACTS")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <span class="mx-4 text-lg font-normal">CONTACTS</span>
                <span class="flex-grow text-right"></span>
              </button>
              <button
                class={`${
                  props.activeButton === "APPLICATIONS"
                    ? "dark:bg-gray-600 bg-gray-200"
                    : ""
                } hover:text-gray-800 hover:bg-gray-100 w-full flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg `}
                onClick={() => handleClick("APPLICATIONS")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-chat-left-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                </svg>
                <span class="mx-4 text-lg font-normal">APPLICATIONS</span>
                <span class="flex-grow text-right"></span>
              </button>
              <button
                class={`${
                  props.activeButton === "UPDATES"
                    ? "dark:bg-gray-600 bg-gray-200"
                    : ""
                } hover:text-gray-800 hover:bg-gray-100 w-full flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg `}
                onClick={() => handleClick("UPDATES")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-clipboard2-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                  <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                </svg>
                <span class="mx-4 text-lg font-normal">UPDATES</span>
                <span class="flex-grow text-right"></span>
              </button>
            </nav>

            <div class=" bottom-0 my-10">
              <button
                class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8"  onClick={(e) => logoutAdmin(e)}
              >
                <span class="mx-4 font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
