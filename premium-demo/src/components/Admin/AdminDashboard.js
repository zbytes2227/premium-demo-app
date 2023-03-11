import React, { useState ,useEffect } from "react";
import Applications from "./Applications";
import auth from "./Auth";
import Contacts from "./Contacts";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Updates from "./Updates";

function AdminDashboard() {
  async function authAdmin() {
    let data = await auth();
    if (!data.user_valid) {
      window.location.href = "/admin";
    }
  }

  useEffect(() => {
    authAdmin();
  }, []);

  const [activeButton, setActiveButton] = useState("HOME");
  let contacts = <Contacts/>
  let applications = <Applications/>
  let home = <Home/>
  let updates = <Updates/>

  return (
    <>
    <div className="sm:flex block dark:bg-gray-600">
      <Sidebar activeButton={activeButton} setActiveButton={setActiveButton}/>
      {activeButton === "HOME" ? home :"" }
      {activeButton === "CONTACTS" ? contacts :"" }
      {activeButton === "APPLICATIONS" ? applications :"" }
      {activeButton === "UPDATES" ? updates :"" }
    </div>
    </>
  );
}

export default AdminDashboard;
