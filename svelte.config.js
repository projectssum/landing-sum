import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessor
    preprocess: vitePreprocess(),
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        paths: {
            base: process.argv.includes('dev') ? '' : '/landing-sum'
        }
    }
};

export default config;
import adapter from "@sveltejs/adapter-static";
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: dev ? """ : "/your-repo-name",
        },
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte"
    }
};

export default config;