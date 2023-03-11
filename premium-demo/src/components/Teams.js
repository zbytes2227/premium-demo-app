import React from "react";
import Teamcard from "./Teamcard";

function Teams() {
  return (
    <div class="p-4 dark:bg-black mt-20">
      <p class="text-3xl sm:text-5xl mb-4 font-bold text-center text-gray-800 dark:text-white">
        Our Professional team
      </p>
      <p class="mb-32 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        Passionate, dedicated, and talented - meet our team, Our team is the
        heart of our business.
      </p>
      <div class="flex flex-col items-center justify-center space-y-24 md:space-y-0 md:flex-row">
        <Teamcard
          image={
            "https://images.pexels.com/photos/9929131/pexels-photo-9929131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name="Member 1"
          post="Management"
          description="One of the things that sets this team member apart is their ability to learn quickly and adapt to new situations. They are always eager to take on new challenges."
        />

        <Teamcard
          image={
            "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          name="Member 2"
          post="Management"
          description="One of the things that sets this team member apart is their ability to learn quickly and adapt to new situations. They are always eager to take on new challenges."
        />
        <Teamcard
          image={
            "https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          name="Member 3"
          post="Development"
          description="One of the things that sets this team member apart is their ability to learn quickly and adapt to new situations. They are always eager to take on new challenges."
        />
      </div>
    </div>
  );
}

export default Teams;
