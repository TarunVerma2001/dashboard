"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SidebarNav({ className, items, ...props }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex flex-col space-y-[30px] p-4", className)}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            pathname === item.href ? "" : "opacity-50 hover:opacity-70",
            "justify-start text-[#fff] font-semibold text-[25px] transition"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
