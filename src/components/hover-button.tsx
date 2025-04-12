"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HoverButtonProps {
  icon: ReactNode;
  text: string;
  hoverWidth?: string;
}

export function HoverButton({
  icon,
  text,
  hoverWidth = "w-32",
  ...props
}: HoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      variant="outline"
      className={cn(
        "group relative w-10 overflow-hidden transition-all duration-300",
        `hover:${hoverWidth}`,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:hidden",
          //   isHovered ? "opacity-0" : "opacity-100",
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          "hidden transition-opacity duration-300 group-hover:block",
          //   isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        {text}
      </span>
    </Button>
  );
}
