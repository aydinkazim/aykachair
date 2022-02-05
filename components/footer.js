import { HomeIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 lg:text-left">
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-rose-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-5 py-3 text-base font-medium text-white hover:bg-rose-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-rose-600 hover:bg-rose-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:text-left lg:px-8">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center font-semibold uppercase md:justify-start">
              <svg
                aria-hidden
                focusable={false}
                data-prefix="fas"
                data-icon="cubes"
                className="mr-3 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                ></path>
              </svg>
              Ayka Sandalye
            </h6>
            <p>Ay Karanlığından Gelen Güzellik</p>
          </div>
          <div>
            <h6 className="mb-4 flex font-semibold uppercase md:justify-start">
              Ürünler
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Laravel
              </a>
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
              <HomeIcon className="mr-4 h-6 w-6" />
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center md:justify-start">
              <MailIcon className="mr-4 h-6 w-6" />
              <a className="text-rose-600" href="mailto:aykachair@gmail.com">
                aykachair@gmail.com
              </a>
            </p>
            <p className="mb-4 flex items-center md:justify-start">
              <PhoneIcon className="mr-4 h-6 w-6" />
              <a href="tel:" className="text-rose-600">
                + 01 234 567 88
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-6 text-center">
        <span>© 2022 Ayka Sandalye</span>
      </div>
    </footer>
  );
}

export default Footer;
