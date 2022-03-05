import Image from "next/image";
import React from "react";
import Hero2 from "../components/hero2";
import ProductCard from "../components/product-card";
import { gql } from "@apollo/client";
import client from "../apollo-client";

function Index2({ chairs }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero2 />
      <div className="py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {chairs.map((chair) => (
            <ProductCard
              key={chair.id}
              title={chair.title}
              image={chair.coverImage.url}
              imageAlt={chair.coverImageAlt}
              slug={chair.slug}
            />
          ))}
        </div>
      </div>
      <aside>
        <div className="py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-rose-600 p-8 text-center text-white sm:col-span-2 sm:p-16 lg:py-24">
              <div className="mx-auto max-w-lg space-y-8">
                <p className="text-3xl font-bold sm:text-4xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  unde maiores natus placeat earum, atque necessitatibus sunt.
                  Ducimus inventore qui unde, corporis itaque rerum illum
                  tempore quod? Quae, quam quaerat.
                </p>
                <a
                  href="#!"
                  className="mt-8 inline-flex items-center rounded-lg bg-white px-5 py-3 font-medium text-rose-600 hover:opacity-75"
                >
                  Come and see
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-4 w-4 flex-shrink-0"
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
                </a>
              </div>
            </div>
            <div className="relative h-64 lg:order-first lg:h-full">
              <Image
                className=""
                src={
                  "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                }
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="relative h-64 lg:h-full">
              <Image
                className=""
                src={
                  "https://images.unsplash.com/photo-1568388741873-dc2920c6a9d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                }
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Index2;

export const getStaticProps = async (req, res) => {
  const { data } = await client.query({
    query: gql`
      query getChairs {
        chairs {
          id
          title
          slug
          coverImage {
            url
          }
          coverImageAlt
        }
      }
    `,
  });

  const { chairs } = data;
  return {
    props: {
      chairs,
    },
  };
};
