<template>
  <div class="space-y-4">
    <Button>слава україні</Button>
    <Button variant="secondary">слава україні</Button>
    <Button variant="outline">слава україні</Button>
    <Button variant="link">слава україні</Button>
    <Button variant="ghost">слава україні</Button>
    <Button variant="icon" size="icon" rounded="full">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      </svg>
    </Button>
  </div>
</template>
<script setup lang="ts">
  import Button from './components/ui/button/Button.vue';
</script>
