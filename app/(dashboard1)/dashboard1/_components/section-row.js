"use client";

import { Icons } from "@/components/icons";

const SectionRow = ({ icon, title, price }) => {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-4">
        {icon}
        <div>
          <h1>{title}</h1>
          <h2 className="text-[14px] text-[#404852]">
            5:12 pm • Belanja di pasar
          </h2>
        </div>
      </div>
      <h2 className="font-semibold text-[#262A41]">{price}</h2>
    </div>
  );
};

export default SectionRow;
