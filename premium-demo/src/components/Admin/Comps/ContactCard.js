import React from "react";

function Contactcard(props) {
  return (
    <>
      {/* <div className="border rounded flex flex-col md:flex-row md:items-center m-1">
      <div
        className="rounded flex items-center m-1 px-1"
        style={{ maxHeight: "60%" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>

      <div className="p-2">
        <div className="flex items-center mb-1">
          <input
            className="form-checkbox h-5 w-5 text-gray-600"
            type="checkbox"
            value={props.user._id}
            id={props.user._id}
          />
          <label className="ml-2" htmlFor={props.user._id}>
            Select
          </label>
        </div>
        <p className="mb-1">Name: {props.user.name}</p>
        <p className="mb-1">Email: {props.user.email}</p>
        <p className="mb-1">Phone: {props.user.phone}</p>

        <button type="button" className="btn btn-sm btn-red">
          Msg
        </button>
        <button type="button" className="btn btn-sm mx-1 btn-yellow">
          Edit
        </button>
        <button type="button" className="btn btn-sm btn-blue">
          Card
        </button>
      </div>
    </div> */}

      <div class="flex dark:bg-gray-800 dark:text-white items-center justify-between p-4 bg-white shadow-lg rounded-2xl">
        <div class="w-2/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
        <div class="w-full flex flex-wrap flex-col">
          <p class="text-sm text-gray-500 dark:text-white">Name: {props.user.name}</p>
          <p class="text-sm text-gray-500 dark:text-white">Email: {props.user.email}</p>
          <p class="text-sm text-gray-500 dark:text-white">Contact: {props.user.phone}</p>
          {/* <p className="mb-1">Name: {props.user.name}</p>
        <p className="mb-1">Email: {props.user.email}</p>
        <p className="mb-1">Phone: {props.user.phone}</p> */}
        </div>

        {/* <div class="w-1/6 text-right">
          <div className="flex items-center mb-1">
            <input
              className="form-checkbox h-5 w-5 text-gray-600"
              type="checkbox"
              value={props.user._id}
              id={props.user._id}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Contactcard;
