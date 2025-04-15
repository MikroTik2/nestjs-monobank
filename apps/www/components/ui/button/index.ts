import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex rounded-md items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-neutral-800",
        secondary: "bg-indigo-600 text-white hover:bg-indigo-700",
        outline:
          "border border-neutral-300 text-neutral-800 hover:bg-neutral-100",
        link: "text-blue-600 underline hover:text-blue-800",
        ghost: "bg-transparent text-neutral-800 hover:bg-neutral-100",
        icon: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
