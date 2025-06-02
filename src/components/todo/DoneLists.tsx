import { ITodos } from "@/interfaces/todo.interface";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";
import { CircleCheck } from "lucide-react";

interface DoneListsProps {
  data: ITodos[];
}
function DoneLists({ data }: DoneListsProps) {
  return (
    <div className="bg-green-100 shadow-md p-4 rounded-lg border-green-100">
      <h2 className="text-xl font-semibold mb-2">Done</h2>

      <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
        <div className="space-y-2">
          {data.map((todo, index) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-2 bg-green-200 rounded-lg hover:bg-green-300 cursor-pointer"
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
