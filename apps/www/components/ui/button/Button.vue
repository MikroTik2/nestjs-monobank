<template>
    <button
      :class="computedClass"
      :disabled="disabled"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { button } from '../utils/button';
  
  const props = defineProps({
    variant: {
      type: String as () => 'primary' | 'secondary' | 'outline' | 'link' | 'ghost' | 'icon',
      default: 'primary',
    },
    size: {
      type: String as () => 'sm' | 'md' | 'lg' | 'icon',
      default: 'md',
    },
    rounded: {
      type: String as () => 'none' | 'sm' | 'md' | 'lg' | 'full',
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });
  
  const computedClass = computed(() =>
    button({
      variant: props.variant,
      size: props.size,
      rounded: props.rounded,
    })
  );
  </script>
  