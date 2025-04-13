import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HoverButtonProps {
  className?: string;
  icon: ReactNode;
  hoverText?: string;
  fixedBar?: boolean;
}

export function HoverButton({
  className,
  icon,
  hoverText,
  fixedBar,
  ...props
}: React.ComponentProps<"button"> & HoverButtonProps) {
  return (
    <Button
      className={cn(
        "flex-center border-0 bg-transparent text-black transition-all duration-300 hover:bg-transparent",
        className,
      )}
      {...props}
    >
      <div
        className={cn("group-hover/sidenav:block", {
          block: fixedBar,
        })}
      >
        {icon}
      </div>
      <span
        className={cn("hidden group-hover/sidenav:block", {
          block: fixedBar,
        })}
      >
        {hoverText}
      </span>
    </Button>
  );
}
