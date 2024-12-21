import React, { useEffect, useState } from 'react';
import Headersection from './Header-section';

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
                <Headersection className='my-5'>Gallery Kegiatan</Headersection>

                {/* Galeri Foto */}
                <h3 className="text-xl font-semibold mb-4">Foto Kegiatan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        galleryItems
                            .filter(item => item.images_gallery) // Pastikan ada gambar
                            .map(item => (
                                <div key={item.id} className="bg-gray-900 shadow-md rounded-lg overflow-hidden">
                                    <img src={item.images_gallery} alt={item.title_gallery} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h4 className="font-semibold">{item.title_gallery}</h4>
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
                    {galleryItems
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