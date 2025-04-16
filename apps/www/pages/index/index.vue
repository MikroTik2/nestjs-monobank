<script setup lang="ts">
import { cn } from "@/lib/utils";
import { buttonVariants } from "~/components/ui/button";

useHead({
    title: "NestJS Monobank",
});
</script>

<template>
    <div class="flex justify-center items-center text-center flex-col h-[90vh] max-md: px-4">
        <h1 class="md:text-6xl text-3xl font-semibold">Monobank в NestJS</h1>
        <p class="mx-auto mt-6 md:max-w-4xl text-sm md:text-lg text-muted-foreground">
            Просте та зручне рішення для інтеграції з платіжною системою Monobank у вашому додатку на NestJS. Використовуйте цей модуль для створення та керування рахунками,
            перевірки статусів, скасування інвойсів і реалізації інших платіжних сценаріїв з максимальним комфортом.
        </p>
        <div class="mt-6 grid w-full min-md:w-[50vw] md:grid-cols-2 gap-6">
            <NuxtLink to="/docs/getting-started/introduction" :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }))">
                <LucideHome />
                Введення
            </NuxtLink>
            <NuxtLink to="/docs/getting-started/installation" :class="cn(buttonVariants({ size: 'lg' }))">
                <LucideZap />
                Установка
            </NuxtLink>
        </div>
    </div>
</template>
