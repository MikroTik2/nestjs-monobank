<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useSidebar } from "./utils";
import { cn } from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes["class"];
}>();

const { toggleSidebar } = useSidebar();
</script>

<template>
    <div data-sidebar="trigger" data-slot="sidebar-trigger" :class="cn(props.class)" @click="toggleSidebar">
        <slot />
        <span class="sr-only">Toggle Sidebar</span>
    </div>
</template>
