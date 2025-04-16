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
      <h3 class="text-[10rem] font-bold bg-gradient-to-t from-neutral-900 to-white bg-clip-text text-transparent">
        {{ props.error?.statusCode }}
      </h3>

      <template v-if="props.error?.statusCode === 500">
        <h3 class="font-bold text-2xl mb-2">
          Internal Server Error. Please try again later.
        </h3>
        <p class="scroll-m-20 text-center max-w-lg">
          We are currently experiencing technical difficulties. Our team is working hard to resolve the issue.
          Please refresh the page or check back after a few minutes.
        </p>
      </template>

      <template v-else>
        <h3 class="font-bold text-2xl mb-2">
          Something's missing
        </h3>
        <p class="scroll-m-20 text-center max-w-lg">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div class="mt-6 flex items-center gap-4">
          <NuxtLink @click="goBack" :class="cn(buttonVariants({ size: 'lg' }))">
            Go Back
          </NuxtLink>
          <NuxtLink to="/" :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }))">
            Back To Home
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>
