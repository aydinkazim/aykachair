import Image from "next/image";
import Link from "next/link";

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

export default function ProductCard({ title, image, slug, imageAlt }) {
  return (
    <Link href={`/sandalye/${slug}`}>
      <div className="group relative cursor-pointer rounded-lg transition-transform duration-700 hover:scale-105 hover:shadow-lg">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 ">
          <Image
            className="bg-grad"
            src={image}
            alt={imageAlt}
            layout="responsive"
            width={600}
            height={600}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-10 w-full rounded-lg bg-gradient-to-t from-neutral-700 p-4 hover:from-rose-600">
          <h3 className="font-body text-center text-xl font-black uppercase text-white">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
