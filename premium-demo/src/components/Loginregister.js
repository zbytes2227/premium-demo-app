import React, { useState } from "react";
import Login from "./modals/Login";
import Register from "./modals/Register";

function Loginregister() {
  const [User, setUser] = useState(true);
  const toggleUser = () => {
    setUser(!User);
  };
  return (
    <div class="container mx-auto flex flex-col md:flex-row mt-10">
      <div className="w-full sm:w-1/2 p-2 align-center flex flex-col justify-center">
        <h2 class="text-4xl font-extrabold text-black dark:text-white sm:text-5xl text-center sm:text-left">
          <span class="block">Login to get Your Dashboard</span>
        </h2>
        <p className="dark:text-white mt-4 text-center sm:text-left">
          The issue with too many re-renders is in the onClick event of your
          buttons. You are calling the toggleUser function instead of passing
          the reference to the function.
        </p>
        <div class="flex items-center my-3 mx-20 dark:text-white">
          <button
            type="button"
            class={`w-full px-4 py-2 text-base font-medium ${
              User ? "inactive" : "active"
            } rounded-l-md text-white`}
            onClick={toggleUser}
          >
            Login
          </button>
          <button
            type="button"
            class={`w-full text-white px-4 py-2 text-base font-medium ${
              User ? "active" : "inactive"
            } bg-purple-700 bg-white rounded-r-md`}
            onClick={toggleUser}
          >
            Signup
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/2">{User ? <Register /> : <Login />}</div>
    </div>
  );
}

export default Loginregister;
