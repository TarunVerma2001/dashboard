"use client";

import { Progress } from "@/components/ui/progress";

const ProgressRange = ({ price, title, value }) => {
  return (
    <div className="grid gap-3">
      <Progress value={value} color="bg-[#197BBD]" />
      <div className="flex justify-between text-[13px]">
        <h2 className="text-[#AEAEAE] text-sm font-medium">{title}</h2>
        <h2 className="text-[#404040] font-semibold text-sm">{price}</h2>
      </div>
    </div>
  );
};

export default ProgressRange;
