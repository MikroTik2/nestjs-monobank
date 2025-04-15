// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    css: ["~/assets/css/tailwind.css"],
    modules: ["@nuxt/eslint", "nuxt-lucide-icons", "shadcn-nuxt", '@nuxtjs/color-mode'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    colorMode: {
        classSuffix: ''
    },
    vite: {
        plugins: [tailwindcss()],
    },
    components: [
        {
            path: "~/components",
            extensions: ["vue"],
        },
    ],
});