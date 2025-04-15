<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings, ChevronRight } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface MenuItems {
    title: string;
    url?: string;
    disable?: boolean;
    isActive?: boolean;
    items?: MenuItems[];
}

const menuItems = ref<MenuItems[]>([
  {
    title: "Початок роботи",
    isActive: true,
    items: [
      {
        title: "Введення",
        url: "/docs/getting-started/introduction/",
      }
    ]
  },
]);
</script>

<template>
  <Sidebar class=" mt-13">
    <SidebarContent>
      <SidebarGroup>
          <SidebarMenu>
            <Collapsible v-for="(element, i) in menuItems" :key="i" :defaultOpen="element.isActive">
                <NuxtLink :url="element.url">
                </NuxtLink>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                      <span>
                          {{ element.title }}
                      </span>
                      <ChevronRight v-if="element.isActive" class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub v-for="(sub, i) in element.items" :key="i">
                    <NuxtLink :to="sub.url">{{ sub.title }}</NuxtLink>
                  </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
          </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>

