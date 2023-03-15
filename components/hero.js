import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div>
      <main className="grid grid-cols-1 items-center gap-y-4 py-8 lg:grid-cols-2 lg:py-0">
        <div className="md:text-center lg:text-left">
          <h1 className="flex flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Ayka Chair</span>{" "}
            <span className="block text-rose-600 xl:inline">
              Ay Karanlığından Gelen Güzellik
            </span>
          </h1>
          <p className="mt-3 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Ağacın kaliteye ve konfora dönüşüp evlerinize güler yüzle gelmesinin
            sebebi bizler olalım, siz isteyin biz yapalım keyfini sürmek size
            kalsın.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="/iletisim">
                <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-8 py-3 text-base font-medium text-white hover:bg-rose-700 md:py-4 md:px-10 md:text-lg">
                  Teklif Al
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="/magaza">
                <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-100 px-8 py-3 text-base font-medium text-rose-700 hover:bg-rose-200 md:py-4 md:px-10 md:text-lg">
                  Mağaza
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={
              "https://images.unsplash.com/photo-1619596658767-f3bbb82b0dee?w=640&q=80"
            }
            width={640}
            height={640}
            layout="responsive"
          />
        </div>
      </main>
    </div>
  );
}

export default Hero;
