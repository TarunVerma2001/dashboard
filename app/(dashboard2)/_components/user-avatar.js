"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center">
      <Avatar>
        <AvatarImage className="object-cover" src={img} />
        <AvatarFallback>CL</AvatarFallback>
      </Avatar>
      <h1 className="text-xs text-[#404040]">{title}</h1>
    </div>
  );
};

export default UserAvatar;
