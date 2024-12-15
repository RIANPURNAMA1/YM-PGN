import { useState } from 'react';
import Button from './Components/Button';
import HeroSection from './Components/Hero-Section';
import Medsos from './Components/Medsos';
import Navbar from './Components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import About from './Components/About';
import Service from './Components/Service';
import GalleryKegiatan from './Components/Gallery-Kegiatan';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gradient-to-r from-gray-200 via-white to-white ' style={{
      scrollBehavior: 'smooth'
    }}>
      <Navbar />
      {/* Tombol hanya muncul di tampilan mobile */}
      <button onClick={toggle} className="md:hidden m-3 "><FontAwesomeIcon icon={faList}/></button>

      {/* Tampilkan Medsos hanya di tampilan desktop */}
      <div className="hidden md:block">
        <Medsos isOpen={true} />
      </div>

      {/* Tampilkan Medsos di tampilan mobile jika isOpen true */}
      <div className="md:hidden">
        {isOpen && <Medsos isOpen={isOpen} />}
      </div>

      <HeroSection />
      <About/>
      <Service/>
      <GalleryKegiatan/>
      <OurTeam/>
      <Contact/>
      <Footer/>
    </div>
  );
}