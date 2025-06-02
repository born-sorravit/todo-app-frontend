import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { ITodos } from "@/interfaces/todo.interface";

interface DoneListsProps {
  data: ITodos[];
}
function DeleteLists({ data }: DoneListsProps) {
  return (
    <div className="bg-red-100 shadow-md p-4 rounded-lg border-red-100">
      <h2 className="text-xl font-semibold mb-2">Delete</h2>

      <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
        <div className="space-y-2">
          {data.map((todo, index) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-2 bg-red-200 rounded-lg hover:bg-red-300 cursor-pointer"
            >
              <div className="capitalize">
                <h5 className="font-semibold ">Task : {index + 1}</h5>
                <p className="text-sm text-gray-600">{todo.task}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default DeleteLists;
