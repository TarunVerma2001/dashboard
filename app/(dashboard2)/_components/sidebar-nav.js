"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SidebarNav({ className, items, ...props }) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col space-y-4", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            pathname === item.href
              ? "text-[#197BBD] bg-[#F0F7FF]"
              : "text-[#C7C7C7] hover:bg-[#F0F7FF] bg-opacity-50",
            "justify-start px-4 items-center space-x-2 flex py-1 rounded-lg font-bold text-[14px] transition"
          )}
        >
          {item.icon}
          <h1>{item.title}</h1>
        </Link>
      ))}
    </nav>
  );
}
