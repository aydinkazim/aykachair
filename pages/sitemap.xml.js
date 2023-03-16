import fs from "fs";
import client from "../apollo-client";
import { gql } from "@apollo/client";

function Sitemap() {}

function getChairsUrls(chairs) {
  return chairs.map((chair) => `/sandalye/${chair.slug}`);
}

function getSitemapXml(chairUrls) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://aykachair.com.tr</loc>
          <lastmod>2023-03-16T09:30:00+03:00</lastmod>
        </url>
        <url>
          <loc>https://aykachair.com.tr/hakkimizda</loc>
          <lastmod>2023-03-16T09:30:00+03:00</lastmod>
        </url>
        <url>
          <loc>https://aykachair.com.tr/magaza</loc>
          <lastmod>2023-03-16T09:30:00+03:00</lastmod>
        </url>
        <url>
          <loc>https://aykachair.com.tr/iletisim</loc>
          <lastmod>2023-03-16T09:30:00+03:00</lastmod>
        </url>
        <url>
          <loc>https://aykachair.com.tr/magaza</loc>
          <lastmod>2023-03-16T09:30:00+03:00</lastmod>
        </url>
      ${chairUrls
        .map(
          (url) => `
        <url>
          <loc>${`https://www.aykachair.com.tr${url}`}</loc>
          <lastmod>2023-03-16T09:30:00+03:00</lastmod>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  return sitemap.trim();
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getChairs {
        chairs {
          id
          title
          slug
        }
      }
    `,
  });

  const { chairs } = data;
  const chairUrls = getChairsUrls(chairs);
  const sitemapXml = getSitemapXml(chairUrls);

  fs.writeFileSync("./public/sitemap.xml", sitemapXml);

  return {
    props: {},
  };
}

export default Sitemap;
