
import promoImage from '../assets/images/buming.jpg'; // Ganti dengan path gambar Anda
import Headersection from './Header-section';
import Button from './Button';
import { useState } from 'react';

export default function Promo() {

    const [show, setShow] = useState(false);
    

    const handleShow = () => {
      setShow(!show);
      }
  return (
    <div className=" w-full  container mx-auto px-4 ">
        <div className='text-center my-6'>
        <Headersection className='text-center'>Promo Mingguan</Headersection>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente esse maxime.</p>
        </div>
        <Button className='' onClick={handleShow}>Lihat Promonya</Button>
        <p>Tekan Lihat Promonya Untuk Melihat Promo</p>
        {
          show && (
            <div>
            <img
        src={promoImage}
        alt="Promo"
        className=" w-full rounded-lg mt-4 "
      />
     
            </div>
            
          )
        }

    </div>
  );
}
