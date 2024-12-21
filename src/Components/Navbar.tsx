import { useState } from "react";
import images from "../assets/images/logo-ym-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // Import ikon matahari

interface NavbarProps {
  TogleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ TogleDarkMode, isDarkMode }) => {
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
    <div
      className={`px-4 py-4 shadow-lg fixed top-0 left-0 right-0 z-50`}
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
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
        <div
          className={`md:flex ${isOpen ? "block" : "hidden"} absolute md:static text-white md:bg-transparent w-full md:w-auto top-16 left-0`} style={{color : isDarkMode ? "white" : "black", backgroundColor: isDarkMode ? "black" : "white" }}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 items-center p-4 md:p-0">
            {DataLink.map((item) => (
              <li key={item.name} className="hover:text-yellow-500 transition-all mb-2 md:mb-0">
                <a href={item.path} className="relative group">
                  {item.name}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}

            <button
              className="text-2xl rounded-full flex items-center mt-2 md:mt-0"
              onClick={TogleDarkMode}
            >
              {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} /> // Tampilkan ikon bulan jika dalam mode terang
              ) : (
              <FontAwesomeIcon icon={faMoon} /> // Tampilkan ikon matahari jika dalam mode gelap
              )}
            </button>
            <button className="border border-slate-300 hover:bg-gray-200 px-4 py-2  rounded-md flex items-center mt-2 md:mt-0" style={{color : isDarkMode ? "white" : "black"}}>

              Follow
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;