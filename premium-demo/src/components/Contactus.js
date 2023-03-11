import React, { useState } from "react";
import Alert from "./Admin/Comps/Alert";

function Contactus() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [msg, setmsg] = useState("");
  const [Loading, setLoading] = useState(false);

  async function submitApplication(e) {
    e.preventDefault();
    setLoading(true);
    const api_data = await fetch("/api/new/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Name,
        email: Email,
        message: Message,
      }),
    });
    const data = await api_data.json();
    setmsg(data.msg);
    setLoading(false);
    if (data.success) {
      setEmail("");
      setName("");
      setMessage("");
    }
  }
  return (
    <section class="text-gray-600 body-font dark:bg-black px-0 sm:px-20 ">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font text-4xl font-medium sm:text-5xl sm:font-bold text-gray-900 dark:text-white">
            Have a question? We're here to help.
          </h1>
          <p class="leading-relaxed mt-4 dark:text-white">
          One of the key reasons to choose our web development company is our experience and expertise in the industry. Our team of skilled developers has years of experience creating custom websites for a wide range of clients, from small businesses to large corporations. 
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 dark:bg-gray-800">
          {msg ? <Alert text={msg} /> : ""}
          <div class="relative mb-2">
            <label
              for="email"
              class="leading-7 text-sm text-gray-600 dark:text-white"
            >
              Your Email :
            </label>
            <input
              type="email"
              id="email"
              value={Email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div class="relative mb-4">
            <label
              for="email"
              class="leading-7 text-sm text-gray-600 dark:text-white"
            >
              Name :
            </label>
            <input
              type="text"
              required
              value={Name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Your Name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div class="relative mb-4">
            <label class="text-gray-700" for="name">
              <textarea
                class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white"
                id="comment"
                placeholder="Enter your Message"
                name="comment"
                rows="3"
                cols="40"
                value={Message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
          </div>
          <button
            type="button"
            onClick={(e) => submitApplication(e)}
            class="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Submit Chat
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="ml-2 animate-spin"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
              hidden={Loading ? false : true}
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3 dark:text-gray-400">
            By clicking Submit Chat, you agree to the terms of use.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
