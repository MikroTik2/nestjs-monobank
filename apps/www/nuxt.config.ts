// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
    modules: [
        '@nuxt/eslint',
    ],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
});
