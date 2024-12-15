import React from 'react';
import Headersection from './Header-section';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: 'https://via.placeholder.com/300', // Ganti dengan URL gambar yang sesuai
    alt: 'Kegiatan 1',
    title: 'Kegiatan 1',
    description: 'Deskripsi untuk kegiatan 1.',
    date: '2023-10-01',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://via.placeholder.com/300', // Ganti dengan URL gambar yang sesuai
    alt: 'Kegiatan 2',
    title: 'Kegiatan 2',
    description: 'Deskripsi untuk kegiatan 2.',
    date: '2023-10-02',
  },
  {
    id: 3,
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Ganti dengan URL video yang sesuai
    alt: 'Kegiatan 3',
    title: 'Kegiatan 3',
    description: 'Deskripsi untuk kegiatan 3.',
    date: '2023-10-03',
  },
  {
    id: 4,
    type: 'image',
    src: 'https://via.placeholder.com/300', // Ganti dengan URL gambar yang sesuai
    alt: 'Kegiatan 4',
    title: 'Kegiatan 4',
    description: 'Deskripsi untuk kegiatan 4.',
    date: '2023-10-04',
  },
  {
    id: 5,
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Ganti dengan URL video yang sesuai
    alt: 'Kegiatan 5',
    title: 'Kegiatan 5',
    description: 'Deskripsi untuk kegiatan 5.',
    date: '2023-10-05',
  },
  {
    id: 6,
    type: 'image',
    src: 'https://via.placeholder.com/300', // Ganti dengan URL gambar yang sesuai
    alt: 'Kegiatan 6',
    title: 'Kegiatan 6',
    description: 'Deskripsi untuk kegiatan 6.',
    date: '2023-10-06',
  },
];

export default function GalleryKegiatan() {
  return (
    <div className=' '>

    <div className="container mx-auto py-10 " id='gallery'>
   <Headersection className='my-5'>Gallery Kegiatan </Headersection>

      {/* Galeri Foto */}
      <h3 className="text-xl font-semibold mb-4">Foto Kegiatan</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {galleryItems
          .filter(item => item.type === 'image')
          .map(item => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={item.src} alt={item.alt} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-400 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Galeri Video */}
      <h3 className="text-xl font-semibold mb-4">Video Kegiatan</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems
          .filter(item => item.type === 'video')
          .map(item => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <video className="w-full h-48 object-cover" controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-400 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}