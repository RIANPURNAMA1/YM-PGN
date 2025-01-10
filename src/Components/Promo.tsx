import promoImage from '../assets/images/buming.jpg'; // Ganti dengan path gambar default Anda
import Headersection from './Header-section';
import Button from './Button';
import { useState } from 'react';

// Definisikan tipe untuk promo
interface Promo {
    id: number;
    image_promo: string | null; // Gambar bisa null jika tidak ada
}

export default function Promo() {
    const [show, setShow] = useState<boolean>(false); // State untuk menampilkan promo

    // Data promo statis
    const Promos: Promo[] = [
        {
            id: 1,
            image_promo: promoImage,
        },
        // Tambahkan lebih banyak data promo jika diperlukan
    ];

    const handleShow = () => {
        setShow(!show);
    };

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
                        {Promos.length > 0 ? ( // Periksa apakah Promos memiliki data
                            Promos.map((promo) => (
                                <div key={promo.id} className="mt-4">
                                    <img
                                        src={promo.image_promo || promoImage} // Gunakan gambar dari array atau gambar default
                                        alt={`Promo ${promo.id}`} // Ganti dengan deskripsi promo
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            ))
                        ) : (
                            <p>Tidak ada promo yang tersedia.</p> // Pesan jika tidak ada promo
                        )}
                    </div>
                )
            }
        </div>
    );
}