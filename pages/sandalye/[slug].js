import Image from "next/image";
import React from "react";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { NextSeo } from "next-seo";

function Product({ chair }) {
  return (
    <div>
      <NextSeo
        noindex={true}
        nofollow={true}
        title={chair.title + " | Sandalye" + " | Ayka Chair"}
        description="This example uses more of the available config options."
        canonical={`https://aykachair.com/sandalye/${chair.slug}`}
        openGraph={{
          url: `https://aykachair.com/sandalye/${chair.slug}`,
          title: chair.title + " | Sandalye" + " | Ayka Chair",
          description: "Open Graph Description",
          images: [
            {
              url: chair.coverImage.url,
              width: 800,
              height: 600,
              alt: chair.coverImageAlt,
              type: "image/jpeg",
            },
          ],
          site_name: "Ayka Chair",
        }}
        twitter={{
          handle: "@aykachair",
          site: "@aykachair",
          cardType: "summary_large_image",
        }}
      />
      <div>
        <section>
          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 ">
              <div className="relative order-2 grid grid-cols-1 gap-4 md:order-none">
                <div className="aspect-w-1 aspect-h-1 ">
                  <Image
                    className="rounded-xl"
                    src={chair.coverImage.url}
                    alt={chair.coverImageAlt}
                    layout="responsive"
                    width={chair.coverImage.width}
                    height={chair.coverImage.height}
                    objectFit="cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 lg:mt-4">
                  {chair.gallery.map((image) => (
                    <div key={image.id} className="aspect-w-1 aspect-h-1">
                      <img
                        className="rounded-xl object-cover"
                        src={image.url}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="top-8 block md:sticky">
                <h1 className="text-4xl font-bold">{chair.title}</h1>

                <section className="group relative mt-4">
                  <article className="prose max-w-none pb-6">
                    <RichText content={chair.content.raw} />
                  </article>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getSlug {
        chairs {
          slug
        }
      }
    `,
  });

  const paths = data.chairs.map((chair) => ({
    params: { slug: chair.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data, errors } = await client.query({
    query: gql`
      query getChairDetail($slug: String!) {
        chair(where: { slug: $slug }) {
          title
          slug
          coverImage {
            url
            width
            height
          }
          coverImageAlt
          content {
            html
            raw
          }
          gallery {
            id
            url
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });

  // Pass post data to the page via props
  return { props: { chair: data.chair }, revalidate: 10 };
}
