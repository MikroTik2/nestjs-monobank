<template>
    <div class="mx-auto w-full border-border/40 dark:border-border md:overflow-hidden">
        <Header />
        <SidebarProvider>
            <SidebarNav class="pt-16" />

            <SidebarInset>
                <div style="box-shadow: -20px 30px 400px rgba(56, 155, 255, 0.3)" class="fixed right-[-500px] top-[80px] size-[500px] animate-fadeInOut" />
                <main class="flex-1 pt-16">
                    <slot />
                </main>
            </SidebarInset>
        </SidebarProvider>
    </div>
</template>
