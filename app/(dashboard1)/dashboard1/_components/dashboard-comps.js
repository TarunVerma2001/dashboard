"use client";
import UserAvatar from "./user-avatar";
import { Icons } from "@/components/icons";
import BarChart from "./bar-chart";
import { Separator } from "@/components/ui/separator";
import SectionHead from "./section-head";
import SectionRow from "./section-row";

import ProgressRange from "./progress-range";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const DashboardComps = ({ title }) => {
  return (
    <div>
      <div className="h-full grid grid-cols-3">
        <div className="col-span-2 py-[60px] px-[100px] bg-[#fff] rounded-l-3xl">
          <div className=" flex flex-col space-y-10">
            <div>
              <div className="flex justify-between items-baseline">
                <h1 className="text-[40px] font-semibold text-[#262A41]">
                  {title}
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="flex  -space-x-2">
                    <UserAvatar
                      img={
                        "https://s3-alpha-sig.figma.com/img/f44d/2afa/df321f79010f6144c572fff752eecb43?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WrL1czRJr9iZh5aHb6RD5wW8jIMi9Q-2DEAB0dSE7~CYV7gRJ--oeG1UtwkpaM-gRKMCTDn~tUMQ538qLlJJkvfrn9ucjFArzn4fHW9tH0REl6bk0XwTyOzOtT7aHkNpbqrnS94rwgUTjYJBpY4uDu-xR0sfFDWuzIPUsJphZ-3DO36HLE29lWbqsjYYvb5~wn0cTk3aq0hBKVpAG4mGBS66ldHJYLvoDdwka44-9Ru40wdsyKk-DnhIFZsT4kLFqXImcqAKvDemGZmdeoJXTK5M-R5rXm2qlx80a4ugZM~evWzHp1-ICIoOc-16Nu1jnt8Xfz98oW-9tkKKqUCdDA__"
                      }
                    />
                    <UserAvatar
                      img={
                        "https://s3-alpha-sig.figma.com/img/2f82/5d9c/113b88aff408612b2d3c71584b223659?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qUAUiRSFA-up2vsPSfnuJHQx-l0iSKIRZS79h65R7bUuNe1bFDvSRmLSt0FWq75u~5l12NErRrnihjpU8mrpopXPV~LHTF90c0Chlc59NJwq5y5hGblVjn4-erbRNE3vQbg4TuSu5UsMjGRfetzc0ORSTogaNsKfta5uDbcI5iEQzi8QDfGne7JCEvm2QNMtCi8TNEJ1z3UutYZ6WtyhI7WaxkDOUuuPg9C2Dvx3cnsUT6il7~QS~qS3nw4umG-TNioCEStOcS~eWb6~XrX9hHJno0sVRurr-nnhRGRJ32WUsSZWDvOggMjnP73vzaJz-RZS4JraBf8ZxaNZKjQ4CQ__"
                      }
                    />
                    <UserAvatar
                      img={
                        "https://s3-alpha-sig.figma.com/img/01d7/37fe/97c41474890e3a9c4542181130fdf14e?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cNFd3F5jqfr9q~p~tJE4MrSNi7TQbKVNkil7UZO0c7geQIA7Verj8CjcpFUH4Wh1lzcZG~l3DB0UpifOQSPhStfyboTU165Kc9ukHqTn4hiFe46GZufL8Ioi5OMzTAcgDAn4aOxHCvx8lEYEfgiM9dwzAtQfoBilHXUMTc5xX8aGZTsOKnZldJeG7zUnjhl8a1hDqaeirMFBBihshTyI7an6MkW16iaHuTnsFudPv7-bmn5-K17IxhfWXdxSW7ZgH4-VWgL5ySR5yrHs4RUnnZOUWkEu378kxd~L7HnJxNB0oz7qh2-M8ADXe4-fMmLnEf1gnJDL9h6eCYxONrqcmw__"
                      }
                    />
                  </div>
                  <div className="cursor-pointer">
                    <Icons.plus />
                  </div>
                </div>
              </div>
              <h2 className="text-[#101010] opacity-50">01 - 25 March, 2020</h2>
            </div>

            {/* Chart */}
            <div className="">
              <BarChart
                heights={[
                  { height: 35, active: false },
                  { height: 52, active: false },
                  { height: 44, active: false },
                  { height: 27, active: false },
                  { height: 35, active: false },
                  { height: 30, active: false },
                  { height: 44, active: false },
                  { height: 27, active: false },
                  { height: 35, active: false },
                  { height: 52, active: false },
                  { height: 44, active: false },
                  { height: 27, active: false },
                  { height: 35, active: false },
                  { height: 30, active: false },
                  { height: 44, active: false },
                  { height: 27, active: false },
                  { height: 35, active: false },
                  { height: 52, active: false },
                  { height: 44, active: false },
                  { height: 27, active: false },
                  { height: 35, active: false },
                  { height: 60, active: true },
                  { height: 44, active: false },
                ]}
              />
            </div>

            <div className="flex flex-col space-y-4">
              <SectionHead title={"Today"} />
              <Separator />

              <SectionRow
                title={"Grocery"}
                icon={<Icons.cart />}
                price={"-326.800"}
              />
              <SectionRow
                title={"Transportation"}
                icon={<Icons.bus />}
                price={"-15.000"}
              />
              <SectionRow
                title={"using"}
                icon={<Icons.house />}
                price={"-185.570"}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <SectionHead title={"Monday 23 March, 2020"} />
              <Separator />

              <SectionRow
                title={"Food and Drinks"}
                icon={<Icons.food />}
                price={"-156.800"}
              />
              <SectionRow
                title={"Entertainment"}
                icon={<Icons.video />}
                price={"-35.200"}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAFC] py-[76px] px-[50px] rounded-r-3xl grid gap-16">
          <div className="flex flex-col space-y-8">
            <h1 className="text-[20px] text-[#262A41] font-normal">
              Where your money go?
            </h1>
            <ProgressRange
              value={33}
              title={"Food and Drinks"}
              price={"872.400"}
            />
            <ProgressRange value={33} title={"Shopping"} price={"1.378.200"} />
            <ProgressRange value={33} title={"Housing"} price={"928.500"} />
            <ProgressRange
              value={33}
              title={"Transportation"}
              price={"420.700"}
            />
            <ProgressRange value={33} title={"Vehicle"} price={"520.000"} />
          </div>

          <div className="bg-[#EDF0F6] p-6 rounded-3xl relative pt-20 grid gap-4">
            <div className="w-[84.15px] h-[72.434px] absolute -top-4 left-6 z-10">
              <Image src="/books.png" fill className="w-full h-full" />
            </div>
            <div className="w-[52.529px] h-[90.118px]  absolute right-6 -top-8 z-10">
              <Image src="/tree.png" fill className="w-full h-full" />
            </div>
            <h1 className="font-semibold">Save more money</h1>
            <h2 className="text-[12px] text-[#404852] opacity-70">
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </h2>
            <Button className="w-full font-semibold text-[13px]">
              VIEW TIPS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComps;
