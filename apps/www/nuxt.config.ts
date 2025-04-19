// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    ssr: false,
    css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
    modules: ["@nuxt/eslint", "nuxt-lucide-icons", "shadcn-nuxt", "@nuxtjs/color-mode", "@nuxt/content"],
    shadcn: {
        prefix: "",
        componentDir: "./components/ui",
    },
    colorMode: {
        classSuffix: "",
    },
    app: {
        head: {
            title: "NestJS Monobank",
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
