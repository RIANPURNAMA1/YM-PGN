import { AlignCenter} from 'lucide';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faClose } from '@fortawesome/free-solid-svg-icons';


export default function AdminDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-slate-900 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={toggleMenu} className="text-white md:hidden">
          {isMenuOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faAlignJustify} />}
        </button>
      {/* Mobile Menu */}
      <div className={` bg-slate-900 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">Home</a>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">Gallery</a>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">Promo</a>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">Team</a>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">LogOut</a>
      </div>
      </nav>



      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-slate-900 `}>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">Home</a>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">Gallery</a>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">Promo</a>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">Team</a>
        <a href="#" className="block text-white hover:bg-blue-400 p-2">LogOut</a>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Total Users</h3>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Active Sessions</h3>
              <p className="text-2xl font-bold">456</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">New Signups</h3>
              <p className="text-2xl font-bold">78</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}