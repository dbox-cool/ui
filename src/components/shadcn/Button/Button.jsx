/* eslint-disable react-refresh/only-export-components */
import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import { cva } from "class-variance-authority"

import { cn } from "../../../utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      hover: {
        default: "",
        outline: "hover:bg-background hover:text-primary hover:border hover:border-primary"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "default"
    },
  }
)
  
  /**
   * @typedef  {object} ButtonProps
   * @property {string}  className tw clases
   * @property {string}  variant default | destructive | outline | secondary | ghost | link
   * @property {string}  hover default | outline | (TODO: destructive | secondary | ghost | link )
   * @property {string}  size icon | sm | default | lg
   * @property {boolean} asChild
   * @property {Element} children JSX Elements inside the Button
   */
 
  const Button = 
    forwardRef(
      /** 
        * Check dependencies here {@link https://ui.shadcn.com/docs/components/button} 
        * @param {ButtonProps} props
        * @param {import("react").Ref<HTMLButtonElement>} ref Reference to the Component
        * @returns {Element}
      */
      ({ className, variant, hover, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
          <Comp
            className={cn(buttonVariants({ variant, size, hover, className }))}
            ref={ref}
            {...props}
          />
        )
      }
    );
    
Button.displayName = "Button"

export default Button;

export {Button, buttonVariants};