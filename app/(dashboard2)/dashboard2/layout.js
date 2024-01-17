"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { SidebarNav } from "./_components/sidebar-nav";
import Image from "next/image";
import { SidebarNav } from "../_components/sidebar-nav";
import { Lato } from "next/font/google";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard2",
    icon: <Icons.overview />,
  },
  {
    title: "Transactions",
    href: "/dashboard2/transactions",
    icon: <Icons.transaction />,
  },
  {
    title: "Cards",
    href: "/dashboard2/cards",
    icon: <Icons.card />,
  },
  {
    title: "Invoices",
    href: "/dashboard2/invoices",
    icon: <Icons.invoice />,
  },
  {
    title: "Goals",
    href: "/dashboard2/goals",
    icon: <Icons.goal />,
  },
  {
    title: "Settings",
    href: "/dashboard2/settings",
    icon: <Icons.setting />,
  },
];

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const DashboardLayout = ({ children }) => {
  return (
    <div className={`h-full lato  ${lato.variable}`}>
      <main className="min-h-screen w-full  ">
        <div className="flex min-h-screen w-full flex-row rounded-3xl  ">
          <aside className="p-12  flex flex-col space-y-16 w-1/5 ">
            <div className="flex space-x-2 items-center">
              <div className="relative">
                <Icons.cloudFilled />
                <h1 className="text-[12px] bg-[#FFC145] rounded-full absolute right-0 top-0 z-10 w-4 h-4 text-center  -rotate-45">
                  $
                </h1>
              </div>
              <h1 className="font-bold text-[#0F4264]">cloudcash</h1>
            </div>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 min-h-full w-full  flex  rounded-3xl">
            <Separator orientation="vertical" className="h-full" />
            <div className="w-full">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
