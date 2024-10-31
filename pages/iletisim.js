import React from "react";
import { useForm } from "@formcarry/react";

import { CheckCircleIcon } from "@heroicons/react/outline";
import { NextSeo } from "next-seo";

const FORM_ID = process.env.NEXT_PUBLIC_FORM_ID;

function Iletisim() {
  const { state, submit } = useForm({
    id: FORM_ID,
  });

  return (
    <>
      <NextSeo
        title="Ayka Chair | İletişim | İnegöl Sandalye"
        description="Ayka Chair ürünleriyle ilgili sorularınızı sormak ve sipariş vermek için hemen tıkla!"
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
        <section>
          <h1 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl md:text-6xl">
            İletişim
          </h1>
          <p className="my-4 text-lg duration-200 hover:text-rose-600 md:justify-start">
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/q4nE4qAu5qkHTPab7"
            >
              <strong>Adres:</strong> Mahmudiye Mahallesi, 23. Mobilya Sokak,
              No:7, 16400 İnegöl/Bursa
            </a>
          </p>
        </section>
        <div className="grid grid-cols-1 gap-5 py-4 md:grid-cols-2 md:py-8">
          <section className="h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d763.2774773321273!2d29.536129069609498!3d40.07296039821858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbc93fac93980b%3A0xe7f4e602db1d33f6!2sMahmudiye%2C%2023.%20Mobilya%20Sk.%20No%3A7%2C%2016400%20%C4%B0neg%C3%B6l%2FBursa!5e0!3m2!1str!2str!4v1730401750426!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </section>
          <section>
            <div className="rounded-lg border bg-white p-8 drop-shadow-lg lg:col-span-3 lg:p-12">
              {state.submitted ? (
                <div
                  className="rounded-b border-t-4 border-teal-500 bg-teal-100 px-4 py-3 text-teal-900 shadow-md"
                  role="alert"
                >
                  <div className="flex items-center gap-4">
                    <div className="py-1">
                      <CheckCircleIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="font-bold">
                        Mesajınız başarıyla gönderildi.
                      </p>
                      <p className="text-sm">
                        En kısa zamanda sizinle iletişime geçilecektir.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={submit}>
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                      placeholder="İsim"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                        placeholder="E-posta Adresi"
                        type="email"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                        placeholder="Telefon Numarası"
                        type="tel"
                        id="phone"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full rounded-lg border p-3 text-sm drop-shadow-xl focus-within:outline-none focus:border-rose-600"
                      placeholder="Mesajınız"
                      rows={8}
                      id="message"
                      name="message"
                      defaultValue={""}
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white sm:w-auto"
                    >
                      <span className="font-medium"> Gönder </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Iletisim;
