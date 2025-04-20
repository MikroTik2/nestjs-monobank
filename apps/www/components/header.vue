<script setup lang="ts">
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import MobileNavigation from "./mobile-nav.vue";
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-30 border-b border-border drop-shadow-lg backdrop-blur-lg">
    <div class="max-w-8xl relative mx-auto px-4 lg:px-8">
      <div class="md:hidden flex items-center">
        <MobileNavigation />
      </div>
      <div class="hidden h-16 w-full items-center justify-between md:flex">
        <div class="flex items-center justify-start gap-3">
          <NuxtLink to="/" class="flex items-center gap-x-3 text-xl font-semibold"> NestJS Monobank </NuxtLink>
        </div>
        <nav class="flex items-center gap-2 text-sm xl:gap-4">
          <ThemeButton />
          <a href="https://github.com/vladislav2251/nestjs-monobank" target="_blank" rel="noopener noreferrer" :class="cn(buttonVariants({}))">
            <LucideGithub />
            Github
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
