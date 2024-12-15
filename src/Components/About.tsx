import React, { useState } from "react";
import images from "../assets/images/frofile-toko.jpeg";
import Headersection from "./Header-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [isAboutVisible, setIsAboutVisible] = useState(true);
  const [isServiceVisible, setIsServiceVisible] = useState(false);

  const handleAboutClick = () => {
    setIsAboutVisible(true);
    setIsServiceVisible(false);
  };

  const handleServiceClick = () => {
    setIsServiceVisible(true);
    setIsAboutVisible(false);
  };

  return (
    <div className=" container mx-auto px-4 " id="about" style={{paddingTop: "100px"}}>
      <Headersection className="text-start container  sm:px-10 py-4 mx-3 mt-10">
        <FontAwesomeIcon icon={faMugHot} /> About Me
      </Headersection>
      <div className="text-center py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-start w-full my-3 ">
           <h2 className="text-2xl font-semibold">Tentang Yomart Pagelaran Cianjur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            excepturi fuga labore rerum odio, magnam iusto iure reiciendis
            tempore vero quis necessitatibus nihil architecto cupiditate. Sequi
            cupiditate libero quibusdam adipisci.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-3">
            <button
              onClick={handleAboutClick}
              className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mt-2"
              type="button"
            >
              Tentang
              <svg
                className="w-2.5 h-2.5 ms-2 inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <button
              onClick={handleServiceClick}
              className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mt-2"
              type="button"
            >
              Service
              <svg
                className="w-2.5 h-2.5 ms-2 inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>

          {isAboutVisible && (
            <div className="z-10 divide-y divide-gray-100  mt-2">
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                nobis eius! Temporibus, inventore libero. Molestias, ipsa
                voluptatum veritatis itaque mollitia aliquam amet non minus
                accusantium optio laborum cumque neque dolores!
              </p>
            </div>
          )}
          {isServiceVisible && (
            <div className="z-10 divide-y divide-gray-100  mt-2">
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                nobis eius! Temporibus, inventore libero
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-center mx-3">
          <img src={images} alt="Profile" className="rounded-lg w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}