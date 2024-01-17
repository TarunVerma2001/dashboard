"use client";

import { Icons } from "@/components/icons";

const GoalsSection = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-2 items-center">
        <h1 className="text-[20px] font-semibold">Goals</h1>
        <Icons.plus />
      </div>
      <div className="flex space-x-4">
        <div className="container h-[168.74px] p-4 flex flex-col justify-between rounded-3xl shadow-xl bg-[#fff]">
          <div>
            <h1 className="text-xl text-[#696969] font-semibold">$550</h1>
            <h1 className="text-sm text-[#AEAEAE]">12/20/2020</h1>
          </div>
          <div>
            <Icons.mountain />
            <h1 className="text-xl"> Holidays</h1>
          </div>
        </div>
        <div className="container h-[168.74px] p-4 flex flex-col justify-between rounded-3xl shadow-xl bg-[#fff]">
          <div>
            <h1 className="text-xl text-[#696969] font-semibold">$200</h1>
            <h1 className="text-sm text-[#AEAEAE]">12/20/2020</h1>
          </div>
          <div>
            <Icons.brush />
            <h1 className="text-xl"> Holidays</h1>
          </div>
        </div>
        <div className="container h-[168.74px] p-4 flex flex-col justify-between rounded-3xl shadow-xl bg-[#fff]">
          <div>
            <h1 className="text-xl text-[#696969] font-semibold">$820</h1>
            <h1 className="text-sm text-[#AEAEAE]">12/20/2020</h1>
          </div>
          <div>
            <Icons.game />
            <h1 className="text-xl"> Holidays</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
