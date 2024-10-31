import { NextSeo, OrganizationJsonLd } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import { ScrollToTop } from "./ScrollToTop";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <NextSeo
        openGraph={{
          images: [
            {
              url: "https://aykachair.com.tr/ayka-logo.png",
              type: "image/jpeg",
            },
          ],
          site_name: "Ayka Chair",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        canonical={router.asPath}
      />
      <OrganizationJsonLd
        type="Corporation"
        id="https://www.aykachair.com/#corporation"
        logo="https://aykachair.com.tr/aykaicon.png"
        legalName="Ayka Chair"
        name="Ayka Chair"
        address={{
          streetAddress: "23. Mobilya Sk. No:7",
          addressLocality: "İnegöl",
          addressRegion: "Bursa",
          postalCode: "16400",
          addressCountry: "TR",
        }}
        contactPoint={[
          {
            telephone: "+90-531-644-5308",
            contactType: "customer service",
            email: "aykachair@gmail.com",
            areaServed: "TR",
            availableLanguage: ["Turkish"],
          },
        ]}
        sameAs={["https://www.instagram.com/aykachair/"]}
        url="https://www.aykachair.com/"
      />
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
