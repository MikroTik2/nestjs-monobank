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
    {
        title: "Платежі",
        items: [
            {
                title: "Створити рахунок",
                url: "/docs/payments/create-invoice",
            },
            {
                title: "Статус рахунку",
                url: "/docs/payments/invoice-status",
            },
            {
                title: "Оплата по токену",
                url: "/docs/payments/create-payment-token",
            },
            {
                title: "Отримати токени",
                url: "/docs/payments/get-card-token",
            },
            {
                title: "Видалити токен",
                url: "/docs/payments/delete-card-token",
            },
            {
                title: "Завершити холд",
                url: "/docs/payments/complete-hold",
            },
            {
                title: "Фіскальні чеки",
                url: "/docs/payments/receipts",
            },
        ],
    },
    {
        title: "Операції",
        items: [
            {
                title: "Виписка",
                url: "/docs/operations/statement",
            },
        ],
    },
    {
        title: "Повернення",
        items: [
            {
                title: "Скасування оплати",
                url: "/docs/refunds/cancel-payment",
            },
            {
                title: "Повернення коштів",
                url: "/docs/refunds/refund-payment",
            },
        ],
    },
]);
</script>

<template>
    <Sidebar>
        <SidebarHeader class="md:hidden py-3 border-b block">
            <SidebarTrigger>
                <NuxtLink to="/" class="flex items-center ml-1 gap-x-3 text-xl font-semibold"> NestJS Monobank </NuxtLink>
            </SidebarTrigger>
        </SidebarHeader>
        <SidebarContent v-for="(element, i) in menuItems" :key="i" class="gap-0 !flex-none">
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
                                    <SidebarMenuButton class="md:hidden relative flex" as-child>
                                        <SidebarTrigger>
                                            <NuxtLink :to="item.url" class="inset-0 left-2 absolute flex items-center">
                                                {{ item.title }}
                                            </NuxtLink>
                                        </SidebarTrigger>
                                    </SidebarMenuButton>

                                    <SidebarMenuButton class="hidden relative md:flex" as-child>
                                        <NuxtLink :to="item.url">
                                                {{ item.title }}
                                        </NuxtLink>
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
