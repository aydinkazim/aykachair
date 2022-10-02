module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["tr"],
    defaultLocale: "tr",
  },
  images: {
    domains: ["images.unsplash.com", "media.graphassets.com", "aykachair.com"],
  },
  async redirects() {
    return [
      {
        source: "/urun-kategori/genel/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/teklif-al/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/classic/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/basic/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sesa/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/urun/:path*",
        destination: "/sandalye/:path*",
        permanent: true,
      },
      {
        source: "/urun-kategori/sandalye",
        destination: "/magaza",
        permanent: true,
      },
      {
        source: "/sandalye/aktiv",
        destination: "/sandalye/aktiw",
        permanent: true,
      },
      {
        source: "/sandalye/crea-2",
        destination: "/sandalye/crea",
        permanent: true,
      },
      {
        source: "/sandalye/crea-ahsap",
        destination: "/sandalye/crea",
        permanent: true,
      },
      {
        source: "/sandalye/crea-bien",
        destination: "/sandalye/crea",
        permanent: true,
      },
      {
        source: "/sandalye/crea-kapitone",
        destination: "/sandalye/crea",
        permanent: true,
      },
      {
        source: "/sandalye/gold-cima-kapitone",
        destination: "/sandalye/gold-cima",
        permanent: true,
      },
      {
        source: "/sandalye/grant",
        destination: "/sandalye/grand",
        permanent: true,
      },
      {
        source: "/sandalye/lotus-metal",
        destination: "/sandalye/lotus",
        permanent: true,
      },
      {
        source: "/sandalye/osgar",
        destination: "/sandalye/oscar",
        permanent: true,
      },
      {
        source: "/sandalye/prag-lux-bar",
        destination: "/sandalye/prag-lux",
        permanent: true,
      },
      {
        source: "/sandalye/sultan-x1",
        destination: "/sandalye/sultan",
        permanent: true,
      },
      {
        source: "/sandalye/tesla-2",
        destination: "/sandalye/tesla",
        permanent: true,
      },
      {
        source: "/sandalye/gusto",
        destination: "/magaza",
        permanent: true,
      },
      {
        source: "/sandalye/lady",
        destination: "/magaza",
        permanent: true,
      },
      {
        source: "/sandalye/lane",
        destination: "/magaza",
        permanent: true,
      },
      {
        source: "/sandalye/milano",
        destination: "/magaza",
        permanent: true,
      },
      {
        source: "/sandalye/nepal",
        destination: "/magaza",
        permanent: true,
      },
      {
        source: "/sandalye/paris",
        destination: "/magaza",
        permanent: true,
      },
      {
        source: "/sandalye/salotti",
        destination: "/magaza",
        permanent: true,
      },
      {
        source: "/sandalye/venus",
        destination: "/magaza",
        permanent: true,
      },
    ];
  },
};
