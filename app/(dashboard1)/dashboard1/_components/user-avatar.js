"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ img }) => {
  return (
    <div className="">
      <Avatar className=" border-2 border-white ">
        <AvatarImage src={img} className="object-cover" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
