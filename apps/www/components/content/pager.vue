<script setup lang="ts">
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const route = useRoute();

const { data } = await useAsyncData("surround", () => {
    return queryCollectionItemSurroundings("content", route.path);
});
</script>

<template>
    <div class="flex justify-between" :class="data?.[0] ? 'justify-end' : 'justify-start'">
        <NuxtLink v-if="data?.[0]" :to="data[0].path" :class="cn(buttonVariants({ variant: 'ghost' }))">
            {{ data[0].title }}
            <LucideChevronRight />
        </NuxtLink>
        <NuxtLink v-if="data?.[1]" :to="data[1].path" :class="cn(buttonVariants({ variant: 'ghost' }))">
            <LucideChevronLeft />
            {{ data[1].title }}
        </NuxtLink>
    </div>
</template>
