import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGlobe } from "@fortawesome/free-solid-svg-icons";

import Home from "./Home";
export default function Navbar() {
  return (
    <div className="lg:container mx-auto bg-bgColor  text-secondaryColor">
      <div className="flex justify-between text-2xl">
        <a href="/">
          <FontAwesomeIcon icon={faHome} className="p-5" />
        </a>

        <a href="https://www.djcalura.software/">
          <FontAwesomeIcon icon={faGlobe} className="p-5" />
        </a>
      </div>
    </div>
  );
}
