<template>
    <Container>
        <div class="flex justify-center items-center text-center flex-col h-[90vh]">
            <h1 class="text-5xl font-bold">Monobank в NestJS</h1>
            <p class="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground">просте й інтуїтивне рішення для інтеграції платіжної системи Monobank безпосередньо у ваш додаток NestJS. Використовуйте нашу бібліотеку для оперативного створення та керування транзакціями, моніторингу статусів платежів та реалізації інших сценаріїв оплати з максимальною зручністю!</p>
            <div class="flex max-w-4xl items center mt-4">
                <NuxtLink to="/docs/getting-started/introduction">
                    <LucideHome/>
                    Введення
                </NuxtLink>
            </div>
        </div>
    </Container>
</template>
<script setup lang="ts">
    import { cn } from '@/lib/utils';
    import { buttonVariants } from '~/components/ui/button';
</script>