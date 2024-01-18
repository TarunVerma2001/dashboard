"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SidebarNav } from "./_components/sidebar-nav";
import Image from "next/image";

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard1",
  },
  {
    title: "Expenses",
    href: "/dashboard1/expenses",
  },
  {
    title: "Wallets",
    href: "/dashboard1/wallets",
  },
  {
    title: "Summary",
    href: "/dashboard1/summary",
  },
  {
    title: "Accounts",
    href: "/dashboard1/accounts",
  },
  {
    title: "Settings",
    href: "/dashboard1/settings",
  },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full bg-[#101010] ">
      <main className="min-h-screen  ">
        <div className="flex min-h-screen bg-[#101010] flex-row md:rounded-3xl md:space-x-12 md:p-[20px]">
          <aside className="py-8 lg:p-8 w-1/5 hidden md:block">
            <div className="pb-4">
              <div className="w-[105px] p-4">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={
                      "https://s3-alpha-sig.figma.com/img/2869/0aa7/de65de332ec15bf450eda8bbd5c75b19?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JeMy3rsN6QqemLsh3Rfq3XeTgflmr9v7PUgn8Tl2x9RZbL8ASElN8HjYaNxWl4swNWKv46FY7e-~A7GujpgPoppHMeyRpkG69GJBVyFJ8uv6Wmf2YG2HY90P-dC7ieyZMCp-qBMw7zapMm~tC1DW6PQ2R1QXVLTlucnHdjCng~66B57zlAfd-Rj~TuEjFjzkdcIggG03~nXCJQr81mQ5LFBV5dMptF29PsujXIz6x2VrcWdlzzHzdkbeBtWk8PC6zFBtHjyMaYoc3xW7a8bF-KbeTrC2jYXlgMHDsLTVMxWisVvMPNTi1Hm9-2QfwBuFR9GJmJhwRsszMQFS-IlrgA__"
                    }
                    alt="Image"
                    fill
                    className="relative rounded-md object-cover "
                  />
                  <div className="w-6 h-6 text-center text-white rounded-full bg-[#DC3434] absolute -right-2 -top-2">
                    <h1>4</h1>
                  </div>
                </AspectRatio>
              </div>
              <div className="p-4">
                <h1 className="text-3xl font-semibold text-white">Samantha</h1>
                <h1 className="text-xl  text-[#fff] opacity-50">
                  samantha@email.com
                </h1>
              </div>
            </div>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 min-h-full bg-background rounded-3xl">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
