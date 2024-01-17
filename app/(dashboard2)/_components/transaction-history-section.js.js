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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icons } from "@/components/icons";
const TransactionHistorySection = () => {
  const tableData = [
    {
      reciever: {
        icon: (
          <Icons.cartTable className="h-5 w-5 p-1 rounded-sm text-center bg-[#EFEFEF]" />
        ),
        name: "Tesco Market",
      },
      type: "Shopping",
      date: "13 December, 2020",
      price: "$75.00",
    },
    {
      reciever: {
        icon: (
          <Icons.truckTable className="h-5 w-5 p-1 rounded-sm text-center bg-[#EFEFEF]" />
        ),
        name: "ElectronMen Market",
      },
      type: "Shopping",
      date: "14 December, 2020",
      price: "$250.00",
    },
    {
      reciever: {
        icon: (
          <Icons.leafTable className="h-5 w-5 p-1 rounded-sm text-center bg-[#EFEFEF]" />
        ),
        name: "Flagrio Restaurant",
      },
      type: "Food",
      date: "13 December, 2020",
      price: "$19.00",
    },
    {
      reciever: {
        icon: (
          <Icons.userTable className="h-5 w-5 p-1 rounded-sm text-center bg-[#EFEFEF]" />
        ),
        name: "John Mathew Kayne",
      },
      type: "Sport",
      date: "13 December, 2020",
      price: "$350",
    },
    {
      reciever: {
        icon: (
          <Icons.userTable className="h-5 w-5 p-1 rounded-sm text-center bg-[#EFEFEF]" />
        ),
        name: "Ann Marlin",
      },
      type: "Shopping",
      date: "13 December, 2020",
      price: "$430",
    },
  ];

  return (
    <div className="rounded-3xl p-4 container shadow-lg bg-[#FFF]">
      <h1 className="text-[20px] font-semibold">Transaction History</h1>

      <Table>
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="">Reciever</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-sm items-center flex space-x-2">
                {item.reciever.icon}
                <h1>{item.reciever.name}</h1>
              </TableCell>
              <TableCell className="text-[#C7C7C7] text-sm">
                {item.type}
              </TableCell>
              <TableCell className="text-[#C7C7C7] text-sm">
                {item.date}
              </TableCell>

              <TableCell className="text-right text-sm font-bold">
                {item.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistorySection;
