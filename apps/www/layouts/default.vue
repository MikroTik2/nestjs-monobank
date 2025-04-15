<script setup lang="ts">
    import AppSidebar from '@/components/AppSidebar.vue'
    import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>
<template>
    <SidebarProvider>
        <AppSidebar/>
        <Header />
        <div class="w-full min-h-screen flex-1">
            <slot />
        </div>
    </SidebarProvider>
</template>
