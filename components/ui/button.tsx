import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primaryTheme text-primary-foreground hover:bg-secondaryTheme",
        secondary:
          "bg-white text-black hover:text-white hover:bg-secondaryTheme border border-black hover:border-secondaryTheme",
        outline:
          "border border-gray-500  hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-white text-black hover:text-white hover:bg-black border border-black",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        disabled: "bg-halfGray text-borderGray border border-halfGray pointer-events-none"
      },
      size: {
        sm: "h-10 px-4 py-2 text-sm",
        md: "h-10 rounded-md px-3 text-md",
        lg: "h-12 rounded-lg px-8 text-md",
        icon: "h-10 w-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </>

    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
