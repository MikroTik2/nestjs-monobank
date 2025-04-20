<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { cn } from "@/lib/utils";

interface Callout {
    title?: string;
    class?: string;
    icon?: Component;
}

defineProps<Callout>();
</script>

<template>
    <Alert :class="cn('bg-muted/50', $props.class)">
        <span v-if="$props.icon" class="mr-4 text-2xl">{{ $props.icon }}</span>

        <AlertTitle v-if="$props.title">{{ $props.title }}</AlertTitle>
        <AlertDescription>
            <slot />
        </AlertDescription>
    </Alert>
</template>
