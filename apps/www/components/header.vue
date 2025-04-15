<template>
    <header class="fixed inset-x-0 top-0 z-30 border-b-[gray] border-b p-2 border-border backdrop-blur-lg">
        <Container>
            <div class="flex justify-between items-center">
                NestJS Monobank
                <div class="flex gap-4">
                    <ThemeButton />
                    <Button class="gap-2" size="sm">
                        <LucideGithub size="15"/> 
                        Github
                    </Button>
                </div>
            </div>
        </Container>
    </header>
</template>
<script setup lang="ts">
    import ThemeButton from './ui/theme-button/ThemeButton.vue'
    import Button from './ui/button/Button.vue'
    import Container from './ui/container/Container.vue'
</script>