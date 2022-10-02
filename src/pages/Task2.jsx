import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Task2() {
  return (
    <div>
      <div className=" flex relative lg:w-3/4 mx-auto">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl p-5" />
        </Link>
        <h1 className="font-Poppins lg:w-fit left-0 right-0 mx-auto lg:text-xl w-3/4 text-sm font-semibold p-5 absolute text-center">
          Learning Activity 1 (Group) - Reaction Video
        </h1>
      </div>
      <div className="border-4 border-secondaryColor bg-white p-4 lg:w-3/4 mx-auto w-full mt-5 mb-14">
        <h1 className="font-SuisseMono border-b border-blueColor text-center">
          Group 10: Reaction Video on the video "Connected But Alone".
        </h1>
        <iframe
          src="https://drive.google.com/file/d/1nmefEaFHEnqWN7HPtqKA-IP_zT3PJM4q/preview"
          className="mx-auto mt-5 lg:w-3/4 w-full"
          height={400}
        ></iframe>
      </div>
    </div>
  );
}
