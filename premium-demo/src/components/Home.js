import React, {  useEffect } from "react";
import Connect from "./Connect";
import Contactus from "./Contactus";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import Teams from "./Teams";
import AOS from "aos";
import "aos/dist/aos.css";
import Loginregister from "./Loginregister";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="dark:bg-black">
        <Header />


        <div className="top">
          <div className="animation" data-aos="fade-up">
            <Featured />
          </div>
        </div>

        <div className="top">
          <div className="animation" data-aos="fade-up">
            <Services />
          </div>
        </div>

        <div className="top">
          <div className="animation" data-aos="fade-up">
            <Teams />
          </div>
        </div>

        <div className="top">
          <div className="animation" data-aos="fade-up">
            <Loginregister />
          </div>
        </div>

        <div className="top">
          <div className="animation" data-aos="fade-up">
            <Connect />
          </div>
        </div>

        <div className="top">
          <div className="animation" data-aos="fade-up">
            <Contactus />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
