"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="py-28 px-12 gap-y-6 flex flex-col items-center justify-center">
      <div>Cantiliver Labs</div>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        The only Dashboard you need
      </h1>
      <div>
        <h2 className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Beautifully Designed Blog Application to which you keep coming back.
        </h2>
        <h2 className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Application designed using NextJs and Shadcn UI
        </h2>
      </div>
      <div className="flex space-x-8">
        <div className="flex flex-col space-y-4 items-center">
          <Button onClick={() => router.push("/dashboard1")}>
            Dashboard 1
          </Button>
          <div
            onClick={() => router.push("/dashboard1")}
            className="w-[300px] hover:scale-110 transform transition cursor-pointer shadow-sm hover:shadow-lg"
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={"/dashboard1.png"}
                fill
                className="w-full h-full rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Button onClick={() => router.push("/dashboard2")}>
            Dashboard 2
          </Button>
          <div
            onClick={() => router.push("/dashboard2")}
            className="w-[300px] border rounded-2xl hover:scale-110 transform transition cursor-pointer shadow-sm hover:shadow-lg"
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={"/dashboard2.png"}
                fill
                className="w-full h-full rounded-2xl"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
