"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import UserAvatar from "./user-avatar";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewTransaction = () => {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/b80c/2d56/04673988b6a1ddf52a49a182f37bdae8?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEk8zpYoxUK3L7CKDKjZ5cSSobIdlDMjfJSpHxHkxsbxSWBmmkDEXyCAJAqCNCoeyiIxH5dd~y67E-Te3obS2kJu7QtNUsl48Eybb0ezhK9vfiZ3OwfSx4vc6dxigBqol~tsLHoPIVBaWhhgs~OcrAyU~jnK62Hdeu-FGgT288zoQOlMIWUnUe~HxEKS66Xb9Qs8eFRmTnh~u~k1A-wD0KCoJvo~9nFijtbpk0eN-oBVT8mqchB4GR2yi4eLEeegXIZIG2BFhPb-Z6J~KGOMBKbhpT1ptirFDsXdEkFOxAv2T8SHKN08kdNkpQ16jfpl548zAh9lbMwZfZN4jkZ-LA__",
      title: "Monica",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/3c0f/4080/b8da88b3ab184cc53327ce28b485f05b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZB7sq-9mFsEgaYzkPSBZmTDjPI4C-H1CdNt9lKpTP4JUk8QZMKzdV9v5pPo45gfMRxF0A~0f0TW~JFbe8-eKqx8k7IXM5sDt7cAnl5bwm5DI01YptwAY6lyHDeQoaGoTYGtkZowKotlF0Y14k8i4PaZi0pzjMvq~ubrXc7-dRv~NZeRQcFf3i2Zu4wICQeJ1INQwQzzPlZKjnn9bjGkUdLHl0f1cdf~GX9qJ3Z7vYdlFcyl4Fnod5l0858z1Bqto8PZE9SjULOvKCFJixJMyDzciOwnw0ocVZ8MbXLfwNchsHJiz2ellwfbGb9~AhzqD8cgwooMaR14xi6BNTTJ0~w__",
      title: "Ann",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/e9e1/f403/cf5d4a598f6cf76c0d6ed4bf16d74907?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c~le1Ug8oHvHGqscR7veGZYglkEhEgMbInkvWPnXVBYhHlTFXQyt1Xsj~7vnl4X4xa3p2zlC~EHnZ0vqQTv0yzWg~hpx9TtiCkfkuU37WhStDHskyqI3U8zjTYKVq3N5wRBMY7YQw0Y8Ee6W2xn2tONix489OAHiOk9RI~R9gSdZViF5b8W3NUdZWYLu8yfbmtikbJGq1ia3HfAn7P4PxkRVBpZwZKI7pTrm6~7MZtNfJbZzK20FW-nJ-Oltn1JQkJtMj2Xjcmabd71nMwSs-7l~Ma5aVVs74gUTOnW2JXq7OgRcviPzZ-lq~0N5WniJXNvb34wSXZXD9ar~3DQ63w__",
      title: "John",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/9452/8a83/cd9f720c33588ae247e7408ef3151d11?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRI4ZSxWSLWtTK5noKYCGbT11mNCvjZJL~vKyZb1qGKddAaehk2ZwFSRDxQrRKtoKUqLmqxkINJg5WGXVCJDy8bef~NarpwQN5U1PpMZQj8dlFsBvihDezX8zzg5M1Ae6LQOsIM60uZjjT3~rQ9i3xT2ENHlV7Y6cXXRxti6rdHFJ4A3dJmWMVet45YPiKsXaIQZmwOe~COoppiiWPyfJP~yIggr6tBN5l-kCxY9DlwsqJnl1SWs7Wq5zvFILFqA3zwD6ISNbuN3bbbA7QrCwLjKa1JLqQQCnZcE-wn1kGBBFH5BE3RTPlWgkApUcGVJde1D5GL1D0qsYbWu6NqOTA__",

      title: "Mike",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/9b99/4074/d458e1186828d13c762284319ca54b38?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhwy6v4dJi-r9b9GBwS3k7nKsqtz0ZyYscDdrzIHiCS9JaSEGZdJ-AKCSPhp-WZwl5VNMwDGsR-hCv~EubbBoMZ1axqcc-hDTIInh3AjRWKSiDTpfxs2VRKyx7-8bvbVBqZeMQ25Ej9LvN2ANH95icxmMwtuKViY7Xef~QvpuGA3yuOEI0-NNSlkkWQqrq8IobJu5IzQeX4eMtWQqmrES026dw47kgcbQvJXcOgarSFxmXOWF8ZlVEgyfBnE7Rpij9g0G8D6ddpbzVpUWxHcVinIvPD2uD2Guv8CHr5bMx8vdEirQLvnq5srKsGPcC2HToEUuuaKfw8YhbPnEIeMTA__",
      title: "Mia",
    },
  ];
  return (
    <div className="flex justify-between">
      <div className="flex flex-col space-y-4 rounded-3xl shadow-xl px-8 py-4">
        <h1 className="text-[20px] font-semibold">New Transaction</h1>
        <div className="flex space-x-4 ">
          {data.map((item, index) => (
            <UserAvatar key={index} img={item.img} title={item.title} />
          ))}
          <Icons.plus className="mt-3" />
        </div>
        <div className="flex space-x-2">
          <div className="w-[175px] h-[36px] rounded-lg border border-[#197BBD] items-center p-2 flex justify-between">
            <input
              type="text"
              placeholder="0"
              className="text-[20px] text-[#C7C7C7] w-full bg- outline-none"
            />

            <h1 className="text-[20px] text-[#C7C7C7]">$</h1>
          </div>
          <Button className="rounded-2xl bg-[#FFC145] text-black text-[11px] ">
            Send the transfer{" "}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
      <div className="w-[156px] h-[183px] relative cursor-pointer">
        <Image
          src={"/cardGetStarted.png"}
          fill
          className="w-full h-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default NewTransaction;
