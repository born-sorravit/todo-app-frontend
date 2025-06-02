import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";
import { CircleCheckBig, CircleX, ClipboardList } from "lucide-react";

function TodoSkeleton() {
  const doneSkeleton = () => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg border">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-2">
          <CircleCheckBig className="text-green-500" size={18} />
          Done
        </h2>
        <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <div className="capitalize">
                  <Skeleton className="h-11" />
                  <Skeleton />
                </div>
              </Skeleton>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  };

  const todoSkeleton = () => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg border">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-2">
          <ClipboardList size={18} />
          To-do
        </h2>

        <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <div className="capitalize">
                  <Skeleton className="h-11" />
                  <Skeleton />
                </div>
              </Skeleton>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  };

  const deleteSkeleton = () => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg border">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-2">
          <CircleX className="text-red-500" size={18} />
          Delete
        </h2>

        <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <div className="capitalize">
                  <Skeleton className="h-11" />
                  <Skeleton />
                </div>
              </Skeleton>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  };
  return (
    <>
      {todoSkeleton()}
      {doneSkeleton()}
      {deleteSkeleton()}
    </>
  );
}

export default TodoSkeleton;
