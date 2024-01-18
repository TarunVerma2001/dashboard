"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SidebarNav } from "./sidebar-nav";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const NavDrawer = ({ children }) => {
  const router = useRouter();
  return (
    <Drawer className="">
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="">
        <div className="pb-4 flex flex-col items-center">
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
          <div className="p-4 flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Samantha</h1>
            <h1 className="text-xl text-muted-foreground opacity-50">
              samantha@email.com
            </h1>
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose>
            <div className="flex flex-col items-center space-y-2 container">
              <Button
                onClick={() => router.push("/dashboard1")}
                variant="ghost"
              >
                Dashboard
              </Button>
              <Button
                onClick={() => router.push("/dashboard1/expenses")}
                variant="ghost"
              >
                Expenses
              </Button>
              <Button
                onClick={() => router.push("/dashboard1/wallets")}
                variant="ghost"
              >
                Wallets
              </Button>
              <Button
                onClick={() => router.push("/dashboard1/accounts")}
                variant="ghost"
              >
                Accounts
              </Button>
              <Button
                onClick={() => router.push("/dashboard1/settings")}
                variant="ghost"
              >
                Settings
              </Button>
              <Button variant="outline">Close</Button>
            </div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
