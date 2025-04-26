// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    ssr: true,
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
            title: "NestJS Monobank — Інтеграція Monobank API для NestJS",
            meta: [
                { name: "description", content: "Простий та зручний модуль для інтеграції Monobank у NestJS додатки. Створення рахунків, скасування платежів, перевірка статусів та більше." },
                { name: "keywords", content: "nestjs, monobank, api, інтеграція, платежі, інвойс, оплата, nestjs monobank" },
                { property: "og:title", content: "NestJS Monobank — Інтеграція Monobank API для NestJS" },
                { property: "og:description", content: "Використовуйте nestjs-monobank для швидкої інтеграції платіжних функцій Monobank у ваші проекти на NestJS." },
                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://nestjs-monobank.vercel.app/" },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "NestJS Monobank — Інтеграція Monobank API для NestJS" },
                { name: "twitter:description", content: "Інтеграція Monobank у додатки NestJS швидко та просто." },
            ],
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
