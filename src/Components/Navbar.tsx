import { useState } from "react";
import images from "../assets/images/logo-ym-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const DataLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Service",
      path: "#service",
    },
    {
      name: "Gallery",
      path: "#gallery",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <div className="px-4 py-4 shadow-lg rounded-lg fixed top-0 left-0 right-0 z-50 bg-white  ">
      <nav className="flex justify-between items-center">
        <div>
          <h2 className="sm:text-sm md:text-2xl font-semibold flex items-center">
            <img src={images} alt="Logo" width={50} className="mr-2" />
            Pagelaran Cianjur
          </h2>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} absolute md:static bg-white md:bg-transparent w-full md:w-auto top-16 left-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 items-center p-4 md:p-0">
            {DataLink.map((item) => (
              <li key={item.name} className="hover:text-yellow-500 transition-all">
                <a href={item.path} className="relative group">
                  {item.name}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
            <button className="border border-slate-300 hover:bg-gray-200 px-4 py-2 text-black rounded-md flex items-center mt-2 md:mt-0">
              Follow
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}