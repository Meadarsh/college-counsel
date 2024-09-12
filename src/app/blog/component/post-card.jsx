import { fDate } from "@/app/utils/format-time";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PenLine } from "lucide-react";
import { useRouter } from "next/navigation";

// ----------------------------------------------------------------------

export default function PostCard({ post }) {
  const { url, imageUrl, writer, title, upload_time } = post;
 
  const router = useRouter();

  const navigate = () => {
    router.push("/blog/" + url); 
  };


  return (
      <Card  onClick={navigate} className="h-full flex flex-col cursor-pointer justify-between">
        <CardHeader className="relative p-2">
          <Image
            alt={title}
            src={imageUrl || "/image/default.jpg"}
            width={450}
            height={300}
            loading="lazy"
            className="w-full h-full object-cover rounded-md"
          />
          <Avatar className="absolute -bottom-3 left-6">
            <AvatarImage src="/logo/cc-bg.png" />
            <AvatarFallback>CC</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="mt-2 p-2 ">
          <h2 className="font-semibold">{title}</h2>
        </CardContent>
        <CardFooter className="px-3 py-2 flex justify-between">
          <p className="text-[12px]">{fDate(upload_time)}</p>
          <div className="flex items-center gap-1">
            <PenLine className=" size-4 text-yellow-500" />
            <span className="text-sm">{writer}</span>
          </div>
        </CardFooter>
      </Card>
  );
}
