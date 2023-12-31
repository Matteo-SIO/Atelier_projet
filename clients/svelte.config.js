import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */

const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      postcss: true,
      sass: true,
      scss: {
        includePaths: ["src", "node_modules"],
      },
    }),
    vitePreprocess({}),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: true,
    }),

    alias: {
      $lib: "./src/lib",
      $components: "./src/components",
      $stores: "./src/lib/stores",
      $types: "./src/lib/@types",
    },
  },
};

export default config;
