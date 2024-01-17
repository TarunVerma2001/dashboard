"use client";
import CreditCard from "./credit-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import ProgressRange from "./progress-range";
import { Switch } from "@/components/ui/switch";
const CardsSection = () => {
  return (
    <div className="rounded-3xl p-4 container shadow-lg">
      <h1 className="text-[20px] font-semibold">Cards</h1>
      <div className="grid grid-cols-3 ">
        <div className="col-span-2 ml-2 flex-col space-y-4">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <CreditCard />
              </CarouselItem>
              <CarouselItem>
                <CreditCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <ProgressRange
            title={"WeeklyPayment Limit"}
            price={"$350.60 / $4000"}
            value={20}
          />
        </div>
        <div className="pl-4 flex justify-between">
          <Separator orientation="vertical" className="h-full" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-end">
              <h1 className="text-3xl text-[#197BBD] font-bold">
                <span className="text-[18px]">$</span>
                2850.75
              </h1>
              <h2 className="text-sm text-[#AEAEAE]">Current Balance</h2>
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-lg text-[#439A86] font-semibold">
                $ 1500.75
              </h1>
              <h2 className="text-sm text-[#AEAEAE]">Income</h2>
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-lg text-[#BB4430] font-semibold">$ 350.75</h1>
              <h2 className="text-sm text-[#AEAEAE]">Outcome</h2>
            </div>
            <div className="flex flex-col items-end">
              <Switch />
              <h2 className="text-sm text-[#AEAEAE]">Deacivate card</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
