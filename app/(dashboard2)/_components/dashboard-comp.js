"use client";

import Header from "./header";

import CardsSection from "./cards-section";
import TransactionHistorySection from "./transaction-history-section.js";
import { Icons } from "@/components/icons";
import GoalsSection from "./goals-section";
import OutcomeStatisticsSection from "./outcome-statistics-section";
import NewTransaction from "./new-transaction-section";

const DashboardComp = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-10">
          <CardsSection />
          <TransactionHistorySection />
        </div>
        <div className="flex flex-col space-y-8">
          <GoalsSection />
          <OutcomeStatisticsSection />
          <NewTransaction />
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
