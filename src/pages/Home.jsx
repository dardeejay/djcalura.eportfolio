import React from "react";
import { Link } from "react-router-dom";
import image1 from "../static/meme1.png";
import image2 from "../static/meme2.png";
import image3 from "../static/meme3.png";

export default function Home() {
  return (
    <div>
      <h1 className="mx-auto lg:w-fit lg:text-3xl text-xl text-center font-Poppins font-semibold p-5">
        Dardee Jay Calura | ACT-2A | E-Portfolio
      </h1>
      <div className="lg:w-3/4 mx-auto border-4 border-secondaryColor bg-white p-4">
        <h1 className="font-SuisseMono text-xl w-full border-b border-blueColor">
          Learning Activity 1 (Solo) - Synthesis Paper
        </h1>
        <p className="font-Apercu text-secondaryColor">
          We wrote a synthesis paper about the topic "Impacts of Globalization
          on Global Communication".
        </p>
        <Link to="/Task1" className="text-blueColor">
          Read More
        </Link>
      </div>
      <div className="lg:w-3/4 mx-auto border-4 border-secondaryColor bg-white p-4 mt-5">
        <h1 className="font-SuisseMono text-xl lg:w-full border-b border-blueColor">
          Learning Activity 1 (Group) - Reaction Video
        </h1>
        <p className="font-Apercu text-secondaryColor">
          A group reaction video about the video lecture entitled Connected but
          Alone.
        </p>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/t7Xr3AsBEK4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="mx-auto w-full lg:w-2/4"
        ></iframe>

        <Link to="/Task2" className="text-blueColor">
          Check our video
        </Link>
      </div>
      <div className="lg:w-3/4 mx-auto border-4 border-secondaryColor bg-white p-4 mt-5">
        <h1 className="font-SuisseMono text-xl lg:w-full border-b border-blueColor">
          Learning Activity 2 (Group) - Meme Analysis
        </h1>
        <p className="font-Apercu text-secondaryColor">
          A group activity where we were tasked to analyze three given memes.
        </p>
        <div className="grid grid-cols-3">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <Link to="/Task3" className="text-blueColor">
          Read More
        </Link>
      </div>
      <div className="lg:w-3/4 mx-auto border-4 border-secondaryColor bg-white p-4 my-5">
        <h1 className="font-SuisseMono text-xl lg:w-full border-b border-blueColor">
          Learning Activity 3 (Solo) - Slogan
        </h1>
        <p className="font-Apercu text-secondaryColor">
          A task where we created a slogan for the video Undergraduate Students
          Unwittingly Subjected to World's Worst Research Presentation.
        </p>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/nSGqp4-bZQY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="mx-auto w-full lg:w-2/4"
        ></iframe>
        <Link to="/Task4" className="text-blueColor">
          See my output
        </Link>
      </div>
    </div>
  );
}
