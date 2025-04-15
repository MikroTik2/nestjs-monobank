<script setup lang="ts">
import { cn } from "@/lib/utils";
import { buttonVariants } from "~/components/ui/button";

useHead({
    title: "NestJS Monobank",
});
</script>

<template>
    <Container>
        <div class="flex justify-center items-center text-center flex-col h-[90vh]">
            <h1 class="text-6xl font-bold">Monobank в NestJS</h1>
            <p class="mx-auto mt-6 max-w-4xl text-md text-muted-foreground">
                просте й інтуїтивне рішення для інтеграції платіжної системи Monobank безпосередньо у ваш додаток NestJS. Використовуйте нашу бібліотеку для оперативного створення
                та керування транзакціями, моніторингу статусів платежів та реалізації інших сценаріїв оплати з максимальною зручністю!
            </p>
            <div class="mt-6 grid w-[700px] grid-cols-2 gap-6">
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
    </Container>
</template>
