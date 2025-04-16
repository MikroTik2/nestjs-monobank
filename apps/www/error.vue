<script setup lang="ts">
import { useRouter, useHead } from '#app';
import type { NuxtError } from '#app';
import { cn } from '@/lib/utils';
import { buttonVariants } from '~/components/ui/button';

const props = defineProps<{
  error: NuxtError;
}>();

useHead({
  title: `Error ${props.error?.statusCode} | NestJS Monobank`
});

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="relative flex flex-col h-[90vh] items-center justify-center">
    <div class="flex flex-col h-full items-center justify-center">
      <h3 class="text-6xl font-bold mb-6 bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent">
        {{ props.error?.statusCode }}
      </h3>
      <p class="scroll-m-20">
        {{ props.error?.statusCode === 500 ? 'Internal Server Error. Please try again later.' : 'This page could not be found.' }}
      </p>
      <div class="mt-6 flex items-center gap-4">
        <NuxtLink @click="goBack" :class="cn(buttonVariants({ size: 'lg' }))">
          Go Back
        </NuxtLink>
        <NuxtLink to="/" :class="cn(buttonVariants({variant: 'outline',  size: 'lg' }))">
          Back To Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
