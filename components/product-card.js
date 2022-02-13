import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Aktiva",
    href: "",
    price: "$48",
    imageSrc:
      "https://aykachair.com/wp-content/uploads/2021/06/AKTIVA-600x458.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Alya",
    href: "#",
    price: "$35",
    imageSrc:
      "https://aykachair.com/wp-content/uploads/2021/06/ALYA-600x442.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Ayka Benç",
    href: "#",
    price: "$89",
    imageSrc:
      "https://aykachair.com/wp-content/uploads/2021/06/AYKA-BENC-600x447.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Emirgan",
    href: "#",
    price: "$35",
    imageSrc:
      "https://aykachair.com/wp-content/uploads/2021/06/EMIRGAN-600x451.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function ProductCard() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <>
              <a
                key={product.id}
                //href={product.href}
                className="group relative"
                // className="group transition-transform duration-1000 hover:z-10 md:hover:scale-150"
              >
                <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 ">
                  <Image
                    className=""
                    src={product.imageSrc}
                    layout="responsive"
                    width={600}
                    height={458}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute bottom-0 left-0 z-10 w-full rounded-lg bg-gradient-to-t from-neutral-700 p-4 hover:from-rose-600">
                  <h3 className="font-body text-center text-xl font-black uppercase text-white">
                    {product.name}
                  </h3>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
