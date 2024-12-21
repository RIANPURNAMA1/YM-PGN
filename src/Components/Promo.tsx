import promoImage from '../assets/images/buming.jpg'; // Ganti dengan path gambar default Anda
import Headersection from './Header-section';
import Button from './Button';
import { useState, useEffect } from 'react';

// Definisikan tipe untuk promo
interface Promo {
    id: number;
    image_promo: string | null; // Gambar bisa null jika tidak ada
}

export default function Promo() {
    const [show, setShow] = useState<boolean>(false);
    const [promos, setPromos] = useState<Promo[]>([]); // State untuk menyimpan data promo
    const [loading, setLoading] = useState<boolean>(true); // State untuk loading

    const handleShow = () => {
        setShow(!show);
    };

    // Mengambil data dari API saat komponen dimuat
    useEffect(() => {
        const fetchPromos = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/promo');
                const data: Promo[] = await response.json();
                console.log(data); // Periksa data yang diterima
                setPromos(data); // Simpan data ke dalam state
            } catch (error) {
                console.error('Error fetching promo data:', error);
            } finally {
                setLoading(false); // Set loading ke false setelah data diambil
            }
        };

        fetchPromos();
    }, []); // Dependency array kosong berarti ini hanya akan dijalankan sekali saat komponen dimuat

    return (
        <div className="w-full container mx-auto px-4">
            <div className='text-center my-6'>
                <Headersection className='text-center'>Promo Mingguan</Headersection>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente esse maxime.</p>
            </div>
            <Button className='' onClick={handleShow}>Lihat Promonya</Button>
            <p>Tekan Lihat Promonya Untuk Melihat Promo</p>
            {
                show && (
                    <div>
                        {loading ? ( // Tampilkan loading jika data masih diambil
                            <p>Loading...</p>
                        ) : (
                            <div>
                                {promos.length > 0 ? ( // Periksa apakah promos memiliki data
                                    promos.map((promo) => (
                                        <div key={promo.id} className="mt-4">
                                            <img
                                                src={promo.image_promo || promoImage} // Gunakan gambar dari API atau gambar default
                                                alt={`Promo ${promo.id}`} // Ganti dengan deskripsi promo
                                                className="w-full rounded-lg"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p>Tidak ada promo yang tersedia.</p> // Pesan jika tidak ada promo
                                )}
                            </div>
                        )}
                    </div>
                )
            }
        </div>
    );
}