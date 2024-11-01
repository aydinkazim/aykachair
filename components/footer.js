import { HomeIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="relative bg-gray-100 text-gray-600 lg:text-left">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:text-left lg:px-8">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center font-semibold uppercase md:justify-start"></h6>
            <a
              href="https://api.whatsapp.com/send?phone=905316445308&text=Merhaba,%20"
              target={`_blank`}
              className="fixed left-2 bottom-2 z-20 cursor-pointer rounded-full bg-green-600 p-2 shadow-2xl shadow-black/40 hover:shadow-black"
            >
              <svg viewBox="0 0 32 32" className="h-12 w-12 fill-white">
                <path
                  d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <Link href="/">
              <a>
                <Image src={"/ayka-logo.png"} width={163} height={76} />
              </a>
            </Link>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase md:justify-start">
              Ürünler
            </h6>
            <p className="mb-4">
              <Link href={"/sandalye/ayasofya"}>
                <a className="text-gray-600">Ayasofya</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href={"/sandalye/lady"}>
                <a className="text-gray-600">Lady</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href={"/sandalye/magnum"}>
                <a className="text-gray-600">Magnum</a>
              </Link>
            </p>
            <p>
              <Link href={"/sandalye/milano"}>
                <a className="text-gray-600">Milano</a>
              </Link>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase md:justify-start">
              Linkler
            </h6>
            <p className="mb-4">
              <Link href={"/"}>
                <a className="text-gray-600">Anasayfa</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href={"/magaza"}>
                <a className="text-gray-600">Mağaza</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href={"/hakkimizda"}>
                <a className="text-gray-600">Hakkımızda</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href={"/iletisim"}>
                <a href="#!" className="text-gray-600">
                  İletişim
                </a>
              </Link>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase md:justify-start">
              İletişim
            </h6>
            <p className="mb-4 flex items-center md:justify-start">
              <span>
                <HomeIcon className="mr-4 h-6 w-6" />
              </span>
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-rose-600"
                href="https://maps.app.goo.gl/q4nE4qAu5qkHTPab7"
              >
                Mahmudiye Mahallesi, 23. Mobilya Sokak, No:7, 16400 İnegöl/Bursa
              </a>
            </p>
            <p className="mb-4 flex items-center md:justify-start">
              <span>
                <MailIcon className="mr-4 h-6 w-6" />
              </span>
              <a className="text-rose-600" href="mailto:aykachair@gmail.com">
                aykachair@gmail.com
              </a>
            </p>
            <p className="mb-4 flex items-center md:justify-start">
              <span>
                <PhoneIcon className="mr-4 h-6 w-6" />
              </span>
              <a href="tel:+905316445308" className="text-rose-600">
                0531 644 53 08
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 bg-gray-200 p-6 text-center">
        <span>© {year} Ayka Sandalye</span>
        <div>
          <span>made with 😻 by </span>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.kazimaydin.dev"
            className="transition hover:text-rose-600"
          >
            kazimaydin.dev
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
