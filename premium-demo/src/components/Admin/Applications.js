import React, { useEffect, useState } from "react";
import ApplicationCard from "./ApplicationCard";
import auth from "./Auth";

function Applications() {
  async function authAdmin() {
    let data = await auth();
    if (!data.user_valid) {
      window.location.href = "/admin/";
    }
  }

  useEffect(() => {
    authAdmin();
  }, []);

  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApplications = applications.filter((application) => {
    const nameMatch = application.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const emailMatch = application.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || emailMatch;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  async function getApplications() {
    setLoading(true);
    const api_data = await fetch("/api/admin/applications", {
      method: "GET",
    });

    const data = await api_data.json();
    setApplications(data);
    setLoading(false);
  }

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="container">
      <div className="mx-auto max-w-md">
        <h2 className="text-center dark:text-white text-2xl my-2">
          APPLICATIONS
        </h2>
        <form className="mb-4 mx-3">
          <input
            className="form-input border w-full px-4 py-3 rounded-lg shadow-sm placeholder-gray-400 text-gray-900 focus:outline-none  dark:text-white focus:shadow-outline-blue focus:border-blue-300 dark:bg-gray-800"
            type="search"
            placeholder="Search Applications"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div className="flex flex-wrap justify-center">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="ml-2 animate-spin"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
          hidden={loading ? false : true}
        >
          <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
        </svg>
        {filteredApplications.map((application) => (
          <ApplicationCard application={application} key={application._id} />
        ))}
      </div>
      <div className="flex justify-center">
        <div
          className={`spinner-border spinner-border-sm m-1 ${
            loading ? "" : "hidden"
          }`}
          style={{ width: "2rem", height: "2rem" }}
          role="status"
        />
      </div>
    </div>
  );
}

export default Applications;
