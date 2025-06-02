import { ITodos } from "@/interfaces/todo.interface";
import React from "react";
import { CircleCheck, CircleCheckBig } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

interface DoneListsProps {
  data: ITodos[];
}
function DoneLists({ data }: DoneListsProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border">
      <h2 className="flex items-center gap-2 text-xl font-semibold mb-2">
        <CircleCheckBig className="text-green-500" size={18} />
        Done
      </h2>

      <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
        <div className="space-y-2">
          {data.map((todo, index) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
            >
              <div className="capitalize">
                <h5 className="font-semibold ">Task : {index + 1}</h5>
                <p className="text-sm text-gray-600">{todo.task}</p>
              </div>

              <CircleCheck className="text-green-500" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default DoneLists;
