// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    css: ["~/assets/css/tailwind.css"],
    modules: ["@nuxt/eslint", "nuxt-lucide-icons"],
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
