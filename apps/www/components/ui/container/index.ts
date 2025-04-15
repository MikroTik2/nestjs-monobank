import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Container } from '@/components/ui/container/container.vue';

export const containerVariants = cva('mx-auto max-w-[1400px] 2xl:w-4/5 w-11/12', {
    variants: {
        size: {
            sm: 'max-w-[1460px]',
        },
    },
});

export type ContainerVariants = VariantProps<typeof containerVariants>;