import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Slogan from "../static/slogan.png";
export default function Task4() {
  return (
    <div>
      <div className=" flex relative lg:w-3/4 mx-auto">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl p-5" />
        </Link>
        <h1 className="font-Poppins lg:w-fit left-0 right-0 mx-auto lg:text-xl w-3/4 text-sm font-semibold p-5 absolute text-center">
          Learning Activity 3 (Solo) - Slogan
        </h1>
      </div>
      <div className="border-4 border-secondaryColor bg-white p-4 lg:w-3/4 mx-auto w-full mt-5">
        <h1 className="font-SuisseMono border-b border-blueColor text-center">
          Neat Presentation = Seamless Education
        </h1>
        <img src={Slogan} alt="" className="mx-auto lg:w-1/2 lg:p-5" />
      </div>
    </div>
  );
}
