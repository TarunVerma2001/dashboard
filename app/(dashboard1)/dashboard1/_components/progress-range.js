"use client";

import { Progress } from "@/components/ui/progress";

const ProgressRange = ({ price, title, value }) => {
  return (
    <div className="grid gap-3">
      <div className="flex justify-between text-[13px]">
        <h2 className=" font-medium">{title}</h2>
        <h2>{price}</h2>
      </div>
      <Progress value={value} />
    </div>
  );
};

export default ProgressRange;
