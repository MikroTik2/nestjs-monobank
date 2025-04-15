<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { ContainerVariants } from '.';
import { cn } from '@/lib/utils';
import { containerVariants } from '.';

interface Props {
    size?: ContainerVariants['size'];
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
    <div :class="cn(containerVariants({ size }), props.class)">
        <slot />
    </div>
</template>