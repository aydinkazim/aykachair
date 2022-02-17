import React from "react";
import Image from "next/image";

function Hero2() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 h-full w-full object-cover object-[75%] opacity-25 sm:object-[25%] sm:opacity-100">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          priority={true}
        />
      </div>

      <div className="hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-r sm:from-white sm:to-transparent" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 md:px-0 lg:flex lg:items-center">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="flex flex-col text-3xl font-extrabold sm:text-5xl md:text-6xl">
            <span> Ayka Chair</span>
            <strong className="font-extrabold text-rose-700 sm:block">
              Ay Karanlığından <br /> Gelen Güzellik
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Ağacın kaliteye ve konfora dönüşüp evlerinize güler yüzle gelmesinin
            sebebi bizler olalım, siz isteyin biz yapalım keyfini sürmek size
            kalsın.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              href="/get-started"
            >
              Teklif Al
            </a>
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              href="/about"
            >
              Mağaza
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
