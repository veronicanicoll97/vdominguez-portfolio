import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://veronicanicoll97.github.io",
  base: "https://github.com/veronicanicoll97/vdominguez-portfolio.git",
});