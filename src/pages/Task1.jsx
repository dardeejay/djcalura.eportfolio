import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Task1() {
  return (
    <div>
      <div className=" flex relative lg:w-3/4 mx-auto">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl p-5" />
        </Link>
        <h1 className="font-Poppins lg:w-fit left-0 right-0 mx-auto lg:text-xl w-3/4 text-sm font-semibold p-5 absolute text-center">
          Learning Activity 1 (Solo) - Synthesis Paper
        </h1>
      </div>
      <div className="border-4 border-secondaryColor bg-white p-4 lg:w-3/4 mx-auto w-full mt-5">
        <h1 className="font-SuisseMono border-b border-blueColor text-center">
          Impacts of Globalization on Global Communication
        </h1>
        <div className="lg:w-3/4 mx-auto text-left indent-5 font-Apercu text-base lg:p-5 p-3">
          <p>
            Globalization in the past few years had rapidly spread around the
            world as global communication technologies improve.
          </p>
          <p>
            Companies and governments invested a huge capital to develop global
            communication technologies and improve their operations so they
            could lower the costs of these technologies.
          </p>
          <p>
            This change has caused technology to improve in such a way that
            information is now available at the tip of our fingers.
          </p>
          <p>
            The internet globalized companies and eliminated the need for
            long-distance travel, allowed us to do business meetings within our
            homes, and even optimized our modes of learning.
          </p>
          <p>
            Even with the pandemic happening right now, we are able to conduct
            classes with the help of online video conferencing platforms.
          </p>
          <p>
            The improvements on the availability of information also led to the
            increase of people's social awareness of happenings around the
            world.
          </p>
          <p>
            The internet allowed people to communicate, share their works,
            collaborate on projects, and express their opinions in a larger
            scale.
          </p>
          <p>
            One of the more local advancement of global communication here in
            our country gave us the ability to look at other countries' response
            to the pandemic so we can reflect on what our government had been
            doing, what it's lacking in and the things that could still be done.
          </p>
          <p>
            However, despite the improvements that we’re experiencing, not
            everyone is getting the services that everyone enjoys. Nowadays,
            interconnectivity has become necessity, so we should expand the
            reach of these technologies so everyone can benefit from
            globalization
          </p>
        </div>
      </div>
    </div>
  );
}
