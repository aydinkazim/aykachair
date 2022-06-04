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
    ];
  },
};
