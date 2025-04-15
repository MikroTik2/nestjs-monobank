<template>
    <div class="mx-auto w-full border-border/40 dark:border-border md:overflow-hidden">
        <Header />
        <SidebarProvider>
            <SidebarNav class="pt-16" />

            <SidebarInset>
                <main class="flex-1 pt-16">
                    <slot />
                </main>
            </SidebarInset>
        </SidebarProvider>
    </div>
</template>
