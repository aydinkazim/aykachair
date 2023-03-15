import { NextSeo } from "next-seo";
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
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
