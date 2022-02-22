import Image from "next/image";
import React from "react";

function Product() {
  return (
    <div>
      <div>
        <section>
          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 ">
              <div className="relative order-2 grid grid-cols-1 gap-4 md:order-none">
                <div className="aspect-w-1 aspect-h-1 ">
                  <Image
                    alt="Mobile Phone Stand"
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1429087969512-1e85aab2683d"
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 lg:mt-4">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="Mobile Phone Stand"
                      className="rounded-xl object-cover"
                      src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                    />
                  </div>
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="Mobile Phone Stand"
                      className="rounded-xl object-cover"
                      src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                    />
                  </div>
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="Mobile Phone Stand"
                      className="rounded-xl object-cover"
                      src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                    />
                  </div>
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      alt="Mobile Phone Stand"
                      className="rounded-xl object-cover"
                      src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
                    />
                  </div>
                </div>
              </div>
              <div className="top-8 block md:sticky">
                <h1 className="text-4xl font-bold">Alya</h1>

                <section className="group relative mt-4">
                  <article className="prose max-w-none pb-6">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa veniam dicta beatae eos ex error culpa delectus rem
                      tenetur, architecto quam nesciunt, dolor veritatis nisi
                      minus inventore, rerum at recusandae?
                    </p>
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
