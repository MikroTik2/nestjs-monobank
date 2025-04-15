<template>
    <header class="fixed inset-x-0 top-0 z-30 border-b-[gray] border-b p-2 border-border backdrop-blur-lg">
        <Container>
            <div class="flex justify-between items-center">
                NestJs Monobank
                <div class="flex gap-4">
                    <Button variant="ghost">
                        <LucideSun size="15"/>
                    </Button>
                    <Button class="gap-2" size="sm" variant="secondary">
                        <LucideGithub size="15"/> 
                        Github
                    </Button>
                </div>
            </div>
        </Container>
    </header>
</template>
<script setup lang="ts">
    import Button from './ui/button/Button.vue'
    import Container from './ui/container/container.vue'
</script>