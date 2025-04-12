import { IoMenu } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { HoverButton } from "./hover-button";

interface SidebarProps {
  className?: string;
}

export default function SideNav({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "relative h-screen w-16 flex-col border-r bg-red-300 transition-all duration-300 hover:w-64",
        className,
      )}
    >
      <header className="flex-center h-12 w-full bg-blue-300">
        <HoverButton icon={<IoMenu />} text="Menu" />
      </header>
      <footer></footer>
    </div>
  );
}
