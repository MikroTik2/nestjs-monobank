<script setup lang="ts">
import { useToc } from "@/composables/use-toc";

const { tocItems, activeId, level } = useToc();
</script>

<template>
    <div v-if="tocItems.length" class="hidden text-sm xl:block">
        <div class="fixed -mt-4 h-[calc(100vh-3.5rem)] pt-4">
            <div class="no-scrollbar h-full overflow-auto pb-10">
                <div class="space-y-2">
                    <p class="font-medium">На цій сторінці</p>
                    <ul class="m-0 list-none">
                        <li v-for="item in tocItems" :key="item.id" :class="`ml-${(item.level - level) * 4} mt-0 pt-2`">
                            <a
                                :href="`#${item.id}`"
                                :class="['inline-block no-underline transition-colors', activeId === item.id ? 'text-foreground font-medium' : 'text-muted-foreground']"
                            >
                                {{ item.text }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
