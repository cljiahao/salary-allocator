"use client";

import { IoMenu } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { HoverButton } from "./hover-button";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

export default function SideNav({ className }: SidebarProps) {
  const [fixedBar, setFixedBar] = useState(false);

  const handleOnClick = () => {
    setFixedBar((state) => !state);
  };

  return (
    <div
      className={cn(
        "group/sidenav relative h-screen w-16 flex-col bg-slate-300 transition-all duration-300 hover:w-64",
        { "w-64": fixedBar },
        className,
      )}
    >
      <header className="flex-center h-12 w-full bg-blue-300">
        <HoverButton
          className={cn("w-full", {
            "mr-4 rounded-r-full bg-slate-300": fixedBar,
          })}
          icon={<IoMenu />}
          hoverText="Menu"
          onClick={handleOnClick}
          fixedBar={fixedBar}
        />
      </header>
      {/* <footer className="h-24 bg-yellow-300"></footer> */}
    </div>
  );
}
