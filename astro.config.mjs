// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import config from "./src/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: config.siteUrl,
  trailingSlash: "never",
  redirects: {
    "/celebraite/privacy": "/apps/celebraite/privacy",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
    react(),
  ],
  adapter: vercel(),
});
