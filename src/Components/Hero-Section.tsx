import Button from "./Button";
import Images from "../assets/images/frofile-toko.jpeg";
import "../index.css"

export default function HeroSection() {
  return (
    <div>
      <section className="container mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">
              Selamat Datang Di Website Yomart Pagelaran
            </h1>
            <p className="mt-4 mb-2 max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, quos. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Exercitationem quasi suscipit aliquid!
            </p>
            <div className="flex space-x-2 sm:flex-row">
              <Button onClick={() => console.log("clicked")} className="btn">
                Get Started
              </Button>
              <Button
                onClick={() => console.log("clicked")}
                className="mt-4 sm:pt-3 btn"
              >
                Lihat Promo Hari Ini
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-3 md:justify-end">
            <img
              src={Images}
              alt="Profile Toko"
              className="rounded-lg w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
