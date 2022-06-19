import { gql } from "@apollo/client";
import { NextSeo } from "next-seo";
import Link from "next/link";
import client from "../apollo-client";
import Hero from "../components/hero";
import ProductCard from "../components/product-card";

export default function Home({ chairs }) {
  return (
    <>
      <NextSeo
        title="Ayka Chair | İnegöl Sandalye"
        description="Ağacın kaliteye ve konfora dönüşüp evlerinize güler yüzle gelmesinin
            sebebi bizler olalım, siz isteyin biz yapalım keyfini sürmek size
            kalsın."
        openGraph={{
          url: "https://www.aykachair.com/",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
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
        <div className="">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Sandalyenin Yeni Adı</span>
              <span className="block text-rose-600">Ayka Chair</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/iletisim">
                  <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-5 py-3 text-base font-medium text-white hover:bg-rose-700">
                    Teklif Al
                  </a>
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link href="/magaza">
                  <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-rose-600 hover:bg-rose-50">
                    Mağaza
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
    revalidate: 10,
  };
};
