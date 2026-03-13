import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-sm hover:bg-blue-700 " +
          "focus-visible:ring-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600",

        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 " +
          "focus-visible:ring-red-600 dark:bg-red-500 dark:hover:bg-red-600",

        outline:
          "border border-gray-300 bg-transparent hover:bg-gray-100 " +
          "text-gray-700 dark:border-gray-600 dark:text-gray-200 " +
          "dark:hover:bg-gray-800 focus-visible:ring-gray-400",

        secondary:
          "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 " +
          "dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 " +
          "focus-visible:ring-gray-400",

        ghost:
          "bg-transparent hover:bg-gray-100 text-gray-700 " +
          "dark:text-gray-200 dark:hover:bg-gray-800 " +
          "focus-visible:ring-gray-400",

        link:
          "bg-transparent underline-offset-4 hover:underline " +
          "text-blue-600 dark:text-blue-400 hover:text-blue-700 " +
          "dark:hover:text-blue-300 focus-visible:ring-blue-600",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9 p-0",
        "icon-sm": "h-8 w-8 p-0 text-xs",
        "icon-lg": "h-11 w-11 p-0 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
      loading: {
        true: "cursor-wait opacity-70 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      loading: false,
    },
  },
);
