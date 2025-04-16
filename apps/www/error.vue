<script setup lang="ts">
import type { NuxtError } from "#app";
import { cn } from "@/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { useRouter } from "#app";

const props = defineProps<{
    error: NuxtError;
}>();

useHead({
    title: `Error ${props.error?.statusCode} | NestJS Monobank`,
});

const router = useRouter();
const isServerError = computed(() => props.error?.statusCode === 500);

function goBack() {
    router.go(-1);
}
</script>

<template>
        <div class="flex flex-col h-[90vh] px-4 text-center items-center justify-center">
            <span class="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">{{
                props.error?.statusCode
            }}</span>
            <h1 class="font-heading my-2 text-2xl font-semibold">
                {{ isServerError ? "Помилка сервера" : "Сторінку не знайдено" }}
            </h1>
            <p>
                {{ isServerError ? "Схоже, виникла проблема зі з'єднанням між сервером і сайтом." : "Вибачте, ми не змогли знайти сторінку, яку ви шукаєте." }}
            </p>

            <div v-if="!isServerError" class="mt-5 sm:flex-nowrap flex-wrap flex gap-3 items-center justify-center gap-x-2">
                <Button size="lg" class="w-full sm:w-[inherit]" @click="goBack()"> Повернутись назад </Button>
                <NuxtLink to="/" :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full sm:w-[inherit]')"> Назад додому </NuxtLink>
            </div>
        </div>
</template>
