import React from 'react';
import Headersection from './Header-section';

const teamMembers = [
  {
    id: 1,
    name: 'Asril Septian',
    position: 'Kepala Toko',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar anggota tim
    description: 'John is the CEO and founder of the company.',
  },
  {
    id: 2,
    name: 'Sindi Sopia',
    position: 'Ass Kepala Toko',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar anggota tim
    description: 'Jane is the Chief Technology Officer.',
  },
  {
    id: 3,
    name: 'Ilham Maulana',
    position: 'Staff Toko',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar anggota tim
    description: 'Alice is responsible for the design and user experience.',
  },
  {
    id: 4,
    name: 'Soleh Muttaqin',
    position: 'Kasir',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar anggota tim
    description: 'Bob is a full-stack developer.',
  },
  {
    id: 5,
    name: 'M. Ardiansyah Nugraha',
    position: 'Store Crew',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar anggota tim
    description: 'Bob is a full-stack developer.',
  },
  {
    id: 6,
    name: 'Rian Purnama',
    position: 'Store Crew',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar anggota tim
    description: 'Bob is a full-stack developer.',
  },
  {
    id: 7,
    name: 'M Rizwar',
    position: 'Store Crew',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar anggota tim
    description: 'Bob is a full-stack developer.',
  },
  {
    id: 8,
    name: 'Lutfy',
    position: 'Store Crew',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar anggota tim
    description: 'Bob is a full-stack developer.',
  },
];

export default function OurTeam() {
  return (
    <div className="container mx-auto py-10">
      <Headersection className='text-center my-6'> Our Team</Headersection>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map(member => (
          <div key={member.id} className="flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.position}</p>
            <p className="text-gray-600 mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}