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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 md:py-16">
          <section className="h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.9811215025643!2d29.518136700000003!3d40.075833200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbc95c733bc92d%3A0x3fd1b190a9a0b1af!2zTWFobXVkaXllLCDEsGJyYWhpbSDFnmVuYmVsIFNrLiBObzoxNiwgMTY0MDAgxLBuZWfDtmwvQnVyc2E!5e0!3m2!1str!2str!4v1664659495404!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </section>
          <section className="">
            <div className="rounded-lg bg-white p-8 drop-shadow-lg lg:col-span-3 lg:p-12">
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
