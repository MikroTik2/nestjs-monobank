<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";

interface MenuItems {
    title: string;
    url?: string;
    items?: MenuItems[];
}

const menuItems = ref<MenuItems[]>([
    {
        title: "Початок роботи",
        url: "/",
        items: [
            {
                title: "Введення",
                url: "/docs/getting-started/introduction",
            },
            {
                title: "Інструкція з установки",
                url: "/docs/getting-started/installation",
            },
        ],
    },
]);
</script>

<template>
    <Sidebar>
        <SidebarContent v-for="(element, i) in menuItems" :key="i" class="gap-0">
            <Collapsible :key="element.title" :title="element.title" default-open class="group/collapsible">
                <SidebarGroup>
                    <SidebarGroupLabel as-child class="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        <CollapsibleTrigger>
                            {{ element.title }}
                            <ChevronRight class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem v-for="item in element.items" :key="item.title" class="ml-4">
                                    <SidebarMenuButton as-child>
                                        <NuxtLink :to="item.url"> {{ item.title }} </NuxtLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </CollapsibleContent>
                </SidebarGroup>
            </Collapsible>
        </SidebarContent>
    </Sidebar>
</template>
