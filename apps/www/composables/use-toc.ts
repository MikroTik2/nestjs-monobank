interface TocItem {
    id: string;
    text: string;
    level: number;
}

export function useToc(containerSelector = ".content-body") {
    const activeId = ref<string | null>(null);
    const tocItems = ref<TocItem[]>([]);
    const level = ref<number>(2);

    onMounted(() => {
        const headers = Array.from(document.querySelectorAll(`${containerSelector} h2, ${containerSelector} h3, ${containerSelector} h4`)) as HTMLElement[];

        if (!headers.length) return;

        level.value = Math.min(...headers.map(h => parseInt(h.tagName[1])));

        tocItems.value = headers.map(header => ({
            id: header.id,
            text: header.textContent || "",
            level: parseInt(header.tagName[1]),
        }));

        const updateActiveId = () => {
            const current = headers.findLast(header => header.getBoundingClientRect().top <= 100)?.id || null;

            activeId.value = current;
        };

        window.addEventListener("scroll", updateActiveId, { passive: true });
        updateActiveId();
    });

    return { tocItems, activeId, level };
}
