import React, { useEffect, useState } from 'react';
import Headersection from './Header-section';

import Leafle from '../assets/images/ImagesPromo/sebarLeaflet.jpeg'
import Mabel from '../assets/images/ImagesPromo/mabel.jpeg'
import Senam from '../assets/images/ImagesPromo/senam.jpeg'
import liwet from '../assets/images/ImagesPromo/liwet.jpeg'
interface GalleryItem {
    id: number;
    images_gallery: string; // URL gambar
    title_gallery: string; // Judul gambar
    desc_gallery: string; // Deskripsi gambar
    tanggal_gallery: string; // Tanggal gambar
}



export default function GalleryKegiatan() {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    const ImagesGallery : GalleryItem[] = [
        { id: 1, images_gallery: Leafle, title_gallery: 'Persiapan Sebar Leaflet Bersama spiderman', desc_gallery: 'Persiapan Sebar Leaflet Bersama spiderman', tanggal_gallery: '2023-09-01' },
        { id: 2, images_gallery: Mabel, title_gallery: 'Senam Sehat Bersama Mabel', desc_gallery: ' Senam Sehat Bersama Mabel untuk meningkatkan kesehatan', tanggal_gallery: '2023-09-01' },
        { id: 3, images_gallery: Senam, title_gallery: 'Senam Dan Icip icip makanan ', desc_gallery: 'Senam Dan Icip icip makanan meningkatkan kesehatan', tanggal_gallery: '2023-09-01' },
        
    ];

    useEffect(() => {
        const fetchGalleryItems = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/gallery');
                const data: GalleryItem[] = await response.json();
                setGalleryItems(data);
            } catch (error) {
                console.error('Error fetching gallery data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleryItems();
    }, []);

    const truncateDescription = (description: string, limit: number) => {
        if (description.length > limit) {
            return description.substring(0, limit) + '...'; // Tambahkan '...' jika dipotong
        }
        return description;
    };

    return (
        <div className=''>
            <div className="container mx-auto py-10 px-2" id='gallery'>
                <Headersection className='mt-5'>Gallery Kegiatan</Headersection>
                <p className=' mb-3 font-light'>Galleri kegiatan yang telah dilaksanakan oleh Tim Toko Yomart Pagelaran</p>

                {/* Galeri Foto */}
                <h3 className="text-xl font-semibold mb-4">Foto Kegiatan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                     


                    
                   

                    {loading ? (
                        <p>Loading...</p>

                    ) : 
                     ImagesGallery.length === 0 ? (
                         <p className=''>Tidak ada data.</p>
                     ):
                     
                    (
                        ImagesGallery
                            .filter(item => item.images_gallery) // Pastikan ada gambar
                            .map(item => (
                                <div key={item.id} className="bg-gray-900 shadow-md rounded-lg overflow-hidden">
                                    <img src={item.images_gallery} alt={item.title_gallery} className="w-full hover:scale-95 h-56 object-cover" />
                                    <div className="p-4">
                                        <h4 className="font-semibold text-white">{item.title_gallery}</h4>
                                        <p className="text-gray-600">{truncateDescription(item.desc_gallery, 100)}</p> {/* Gunakan fungsi untuk memotong deskripsi */}
                                        <p className="text-gray-400 text-sm">{item.tanggal_gallery}</p>
                                    </div>
                                </div>
                            ))
                    )}
                </div>
                {/* Galeri Video */}
                <h3 className="text-xl font-semibold mb-4">Video Kegiatan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {ImagesGallery
                        .filter(item => item.images_gallery.endsWith('.mp4')) // Filter video
                        .map(item => (
                            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <video className="w-full h-48 object-cover" controls>
                                    <source src={item.images_gallery} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="p-4">
                                    <h4 className="font-semibold">{item.title_gallery}</h4>
                                    <p className="text-gray-600">{truncateDescription(item.desc_gallery, 500)}</p> {/* Gunakan fungsi untuk memotong deskripsi */}
                                    <p className="text-gray-400 text-sm">{item.tanggal_gallery}</p>
                                </div>
                            </div>
                        ))}
                </div>
 </div>
        </div>
    );
}