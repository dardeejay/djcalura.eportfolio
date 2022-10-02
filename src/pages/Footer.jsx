import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div>
      <div className="flex justify-between border-t-2 border-secondaryColor pt-2 px-2 text-lg">
        <h3 className="">© Dardee Jay Calura</h3>
        <ul className="flex justify-around w-32">
          <li>
            <a href={"https://www.facebook.com/dardzz.calura/"}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href={"https://www.instagram.com/dardeejay.gg/?hl=en"}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href={"https://twitter.com/darddddddddddzz"}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href={"https://github.com/dardeejay"}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
