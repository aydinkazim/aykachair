import Image from "next/image";
import React from "react";

function Hakkimizda() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 md:py-16">
        <section className="grid gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl md:text-6xl">
            Hakkımızda
          </h1>
          <article className="grid gap-2">
            <p>
              Firmamızın ana gayesi,sektöründe yenilik ve gelişmeye açık olarak
              dünyada ve ülkemizde gelişmeleri izleyerek, hitap ettiği Türk ve
              dünya pazarına en uygun modern üretim teknikleri ile imalatı
              geliştirmiş olan ürünlerin, etkin bir satış ağıyla ülkemizde ve
              dünyada hakettiği yeri alması ve bu üstünlüğü muhafaza etmesidir.
            </p>
            <p>
              Şirketimiz,benimsediği bu ana gayesinin gerçekleşebilmesi için ele
              alıp uyguladığı teknoloji, yatırım, pazarlama,operasyon planları
              ve politikaları ile üretim bütçe programlarını,bu ana gayenin
              birer aracı saymaktadır.
            </p>
            <h2 className="text-2xl font-bold text-rose-600">
              Ayka Chair olarak kalite politikamız;
            </h2>
            <p>
              Modern mobilya pazarında lider olma hedefiyle kalite bilincini tüm
              çalışanlarımıza ve tedarikçilerimize benimsetmek, firmanın bütün
              süreçlerinde sürekli iyileştirme ve geliştirme düşüncesiyle çağdaş
              yöntem ilkelerini uygulamak suretiyle toplam kalite anlayışını
              yerleştirmek.
            </p>
            <p>
              Uluslararası kalite standartlarını hayata geçirmek kalite
              perspektifimizi kurumsal hale getirmek, müşterilerimize verdiğimiz
              kalite taahhüdünü yerine getirmektir.
            </p>
          </article>
        </section>
        <section className="shadow_image_left relative order-first h-64 md:order-none md:h-full">
          <Image
            className="absolute"
            src={
              "https://images.unsplash.com/photo-1605885795793-097ffaee6b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            }
            alt="Hakkımızda"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </section>
      </div>
    </div>
  );
}

export default Hakkimizda;
