"use client";

import { Separator } from "@/components/ui/separator";
import SectionHead from "./section-head";
import SectionRow from "./section-row";

const TransactionSaction = ({ title, data }) => {
  return (
    <div className="flex flex-col space-y-4">
      <SectionHead title={title} />
      <Separator />

      {data.map((item, index) => (
        <SectionRow
          key={index}
          title={item.title}
          icon={item.icon}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default TransactionSaction;
