"use client";

import { Icons } from "@/components/icons";
import ProgressRange from "./progress-range";
import { Progress } from "@/components/ui/progress";

const OutcomeStatisticsSection = () => {
  const data = [
    {
      icon: (
        <div className="flex justify-center items-center w-[42px] h-[43px] bg-[#FFEADA] rounded-lg">
          <Icons.cartOutcome />
        </div>
      ),
      progress: {
        value: 52,
        color: "bg-[#F79042]",
      },
      title: "Shopping",
    },
    {
      icon: (
        <div className="flex justify-center items-center w-[42px] h-[43px] bg-[#E4F0FF] rounded-lg">
          <Icons.planeOutcome />
        </div>
      ),
      progress: {
        value: 21,
        color: "bg-[#2BC255]",
      },
      title: "Shopping",
    },
    {
      icon: (
        <div className="flex justify-center items-center w-[42px] h-[43px] bg-[#E4F0FF] rounded-lg">
          <Icons.planeOutcome />
        </div>
      ),
      progress: {
        value: 74,
        color: "bg-[#70A6E8]",
      },
      title: "Shopping",
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-[20px] font-semibold">Outcome Statistics</h1>
      {data.map((item, index) => (
        <div key={index} className="flex space-x-4 items-center">
          {item.icon}
          <div className="w-full">
            <div className="flex space-x-4 items-center">
              <Progress
                value={item.progress.value}
                color={item.progress.color}
              />
              <h1 className="text-2xl font-semibold text-[#696969]">
                {item.progress.value}%
              </h1>
            </div>
            <h2 className="text-[#AEAEAE] font-normal">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutcomeStatisticsSection;
