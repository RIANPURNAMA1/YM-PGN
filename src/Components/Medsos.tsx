import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Headersection from './Header-section';
import "../assets/css/Medos.css";

const socialMediaLinks = [
  {
    name: 'Facebook',
    icon: faFacebook,
    url: 'https://www.facebook.com',
    hover: "hover:bg-blue-400",
    textHover: "hover:bg-blue-900",
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    url: 'https://www.twitter.com',
    hover: "hover:bg-blue-300",
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com',
    hover: "hover:bg-pink-500",
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
    hover: "hover:bg-blue-600",
  },
];

interface MedsosProps {
  isOpen: boolean;
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Komponen untuk menampilkan media sosial yang diikuti oleh Yomart Pagelaran Cianjur.
 * 
 * @param {{ isOpen: boolean }} props - properti yang berisi nilai boolean yang menentukan apakah komponen ini terlihat atau tidak.
 * @returns {JSX.Element} elemen JSX yang menampilkan media sosial.
 */
/******  d0129e51-d457-4aa6-9c0e-f259c8d7e112  *******/
const Medsos: React.FC<MedsosProps> = ({ isOpen }) => {
  return (
  <div id='medsos' className={`container mx-auto px-3 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} style={{marginTop: '',}}>
      <Headersection className=' text-center mt-3'>Follow Media Sosial Kami</Headersection>
      <div className="flex flex-wrap justify-center   p-4 md:flex-nowrap">
        {socialMediaLinks.map((media) => (
          <div key={media.name} className={`card-icon shadow-lg rounded-lg p-3 w-full md:w-48 text-center ${media.hover} ${media.textHover}`}>
            <a href={media.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FontAwesomeIcon icon={media.icon} size="lg" className=" icon text-blue-500 mb-2" />
              <h3 className="text-md md:text-lg font-semibold">{media.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medsos;