<script setup lang="ts">
import { ref } from "vue";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronRight, Menu } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

interface MenuItems {
  title: string;
  url?: string;
  items?: MenuItems[];
}

const menuItems = ref<MenuItems[]>([
  {
    title: "Початок роботи",
    url: "/",
    items: [
      {
        title: "Введення",
        url: "/docs/getting-started/introduction",
      },
      {
        title: "Інструкція з установки",
        url: "/docs/getting-started/installation",
      },
    ],
  },
]);
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="ghost" size="icon">
        <Menu class="!size-[18px]" />
        <span class="sr-only">Открыть меню</span>
      </Button>
    </SheetTrigger>

    <SheetContent class="flex overflow-y-auto flex-col justify-between" side="left">
      <div>
        <SheetHeader class="text-start">
          <SheetTrigger as-child>
            <NuxtLink to="/" class="text-lg font-semibold text-foreground"> NestJS Mono </NuxtLink>
          </SheetTrigger>
        </SheetHeader>

        <div class="relative flex flex-col h-full overflow-hidden py-6 text-sm">
          <div class="space-y-4">
            <div v-for="(element, i) in menuItems" :key="i">
              <Collapsible default-open>
                <template #trigger>
                  <div class="flex items-center justify-between text-sm font-semibold text-foreground hover:bg-muted rounded-md p-2 cursor-pointer">
                    {{ element.title }}
                    <ChevronRight class="ml-auto transition-transform group-data-[state=open]:rotate-90" />
                  </div>
                </template>
                <CollapsibleContent>
                  <div class="flex flex-col">
                    <NuxtLink v-for="item in element.items" :key="item.title" :to="item.url" class="ml-4 block p-2 hover:bg-muted rounded-md">
                      {{ item.title }}
                    </NuxtLink>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
