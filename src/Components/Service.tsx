import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Headersection from './Header-section';


const services = [
  {
    id: 1,
    title: 'Teras Coffee',
    description: 'Menyediakan jajanan yang enak seperti roti bakar, Bolit , dan kopi',
    icon: faCoffee,
  },
  {
    id: 2,
    title: 'Pelayanan Ramah',
    description: 'Pelayanan yang ramah dan profesional',
    icon: faUserAlt,    
  },
  {
    id: 3,
    title: 'Harga Terjangkau',
    description: 'Menyediakan harga yang terjangkau, dan banyak promo yang menarik',
    icon: faShoppingBag,
  },
];

export default function Service() {
  return (
    <div className=' my-8' id='service'>

    <div className="container mx-auto py-10 px-2  " >
      <Headersection className="text-center my-5">Layanan Kami</Headersection>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className=" shadow-md rounded-lg p-6 text-center hover:bg-gray-800 hover:text-white hover:transition-transform">
            <FontAwesomeIcon icon={service.icon} className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}