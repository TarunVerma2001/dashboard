"use client";
import { Icons } from "@/components/icons";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-[43px] font-semibold">Weekly Sumup</h1>
          <h2 className="text-[#AEAEAE]">
            Get summary of your weekly online transactions here.
          </h2>
        </div>
        <div className="flex space-x-4 items-center">
          <Icons.inbox className="cursor-pointer" />
          <Icons.notiBell className="cursor-pointer" />
          <div className="flex space-x-2 cursor-pointer">
            <Icons.user className="bg-[#FFC145] rounded-full" />
            <div>
              <h1 className="text-sm font-semibold">Andrew</h1>
              <h2 className="text-sm text-[#AEAEAE]">Admin Account</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
