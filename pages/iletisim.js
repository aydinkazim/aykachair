import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { useForm as formCarry } from "@formcarry/react";

import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/outline";

function Iletisim() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { state, submit } = formCarry({
    id: "WZcivu0M29C",
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 md:py-16">
        <section className="h-64 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.9823057577823!2d29.515980715641525!3d40.07580678422637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbc95c73a0998b%3A0xd0b7130a81a54a71!2zTWFobXVkaXllLCDEsGJyYWhpbSDFnmVuYmVsIFNrLiBObzoxOCwgMTY0MDAgxLBuZWfDtmwvQnVyc2E!5e0!3m2!1str!2str!4v1624026240659!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </section>
        <section className="">
          <section className="">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
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
                <form className="space-y-4" onSubmit={handleSubmit(submit)}>
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
                      {...register("name", { required: true })}
                    />
                    {errors.name && errors.name.type === "required" && (
                      <div className="mt-2 flex items-center gap-2 rounded-xl bg-blue-100 p-2">
                        <ExclamationIcon className="h-10 w-10 text-blue-700 md:h-6 md:w-6" />
                        <p className="font-bold text-blue-700">
                          Size hitap edebilmemiz için lütfen isminizi
                          belirtiniz.
                        </p>
                      </div>
                    )}
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
                      {...register("message", {
                        required: true,
                        minLength: 10,
                      })}
                    />
                    {errors.message && errors.message.type === "required" && (
                      <div className="mt-2 flex items-center gap-2 rounded-xl bg-blue-100 p-2">
                        <ExclamationIcon className="h-10 w-10 text-blue-700 md:h-6 md:w-6" />
                        <p className="font-bold text-blue-700">
                          Lütfen iletmek istediğiniz mesajı yazınız.
                        </p>
                      </div>
                    )}
                    {errors.message && errors.message.type === "minLength" && (
                      <div className="mt-2 flex items-center gap-2 rounded-xl bg-blue-100 p-2">
                        <ExclamationIcon className="h-10 w-10 text-blue-700 md:h-6 md:w-6" />
                        <p className="font-bold text-blue-700">
                          Mesajınız en az 10 karakter içermelidir.
                        </p>
                      </div>
                    )}
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
        </section>
      </div>
    </div>
  );
}

export default Iletisim;
