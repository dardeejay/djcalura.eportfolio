import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import image1 from "../static/meme1.png";
import image2 from "../static/meme2.png";
import image3 from "../static/meme3.png";
export default function Task3() {
  return (
    <div>
      <div className=" flex relative lg:w-3/4 mx-auto">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl p-5" />
        </Link>
        <h1 className="font-Poppins lg:w-fit left-0 right-0 mx-auto lg:text-xl w-3/4 text-sm font-semibold p-5 absolute text-center">
          Learning Activity 2 (Group) - Meme Analysis
        </h1>
      </div>
      <div className="border-4 border-secondaryColor bg-white p-4 lg:w-3/4 mx-auto w-full mt-5 mb-14">
        <h1 className="font-SuisseMono border-b border-blueColor text-center">
          Group 10: Meme Analysis.
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 border-secondaryColor border mt-3">
          <img src={image1} alt="" />
          <p className="p-5 font-Apercu text-lg text-center h-fit lg:my-auto lg:mr-16">
            This meme implies that you should stay inside your home, or you will
            die. With the pandemic ravaging the lives of the people. This meme
            pokes fun at the issue while trying to also discourage the public
            from going out of their houses. They used a funeral service provider
            logo implying that if you go out, then you may be staying in a
            funeral service home implying that you can die.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 border-secondaryColor border mt-3">
          <p className="p-5 font-Apercu text-lg text-center h-fit lg:my-auto md:order-1 order-2 ">
            This meme is almost similar to the first one when it comes to the
            message. It wants to tell us that it is better to stay and rest
            inside your home rather than go outside and risk your life. This is
            because of the pandemic, which makes public places the breeding
            ground for COVID19. This meme is only a screenshot which makes it
            simple and easy to understand for every Filipino.
          </p>
          <img src={image2} alt="" className="md:order-2 order-1" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 border-secondaryColor border mt-3">
          <img src={image3} alt="" />
          <p className="p-5 font-Apercu text-lg text-center h-fit lg:my-auto lg:mr-16">
            This meme twists the meaning of the phrase “Surround yourself with
            positive people” making fun and raising awareness of the current
            situation we are experiencing. The pandemic changed the whole
            meaning of positive people implying that if a person is positive, it
            means that they have COVID. What makes this meme relatable is that
            we wouldn’t want a positive person with covid around us.
          </p>
        </div>
      </div>
    </div>
  );
}
