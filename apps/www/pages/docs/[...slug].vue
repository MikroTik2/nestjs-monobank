<script lang="ts" setup>
import Toc from "~/components/content/toc.vue";

const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => queryCollection("content").path(route.path).first());
</script>

<template>
    <main class="relative py-6 px-4 sm:px-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div class="mx-auto w-full min-w-0 max-w-3xl">
            <div class="space-y-2">
                <h1 class="scroll-m-20 text-2xl sm:text-3xl font-bold tracking-tight">
                    {{ page?.title }}
                </h1>
                <p class="text-sm sm:text-base text-muted-foreground">
                    {{ page?.description }}
                </p>
            </div>

            <div class="prose prose-neutral content-body dark:prose-invert pb-12 pt-8">
                <ContentRenderer v-if="page?.body" :value="page?.body" />
            </div>

            <Pager />

            <div class="mt-10 xl:hidden">
                <Toc />
            </div>
        </div>

        <div class="hidden xl:block">
            <Toc />
        </div>
    </main>
</template>

<style lang="scss">
main {
    h4 {
        letter-spacing: 0;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        scroll-margin: 5rem;
    }

    h3 {
        counter-increment: step;
        letter-spacing: 0;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.75rem;
        scroll-margin: 5rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;

        a {
            pointer-events: none;
        }

        &::before {
            position: absolute;
            display: inline-flex;
            height: 2.25rem;
            width: 2.25rem;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            border-width: 4px;
            border-color: var(--background);
            background-color: var(--color-muted);
            text-align: center;
            text-indent: 1px;
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 500;
            margin-left: -50px;
            margin-top: -4px;
            content: counter(step);
        }
    }

    pre {
        border-style: var(--tw-border-style);
        border-width: 1px;
        border-radius: 0.6rem;
        max-height: 600px;
        padding: 1.2rem;
        background-color: color-mix(in oklab, var(--muted) 50%, transparent);
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        overflow-x: auto;
    }

    p {
        line-height: 1.75rem;
    }
}
</style>
