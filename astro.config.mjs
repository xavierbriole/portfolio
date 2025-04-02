// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import config from "./src/config.js";

// https://astro.build/config
export default defineConfig({
  site: config.siteUrl,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});
