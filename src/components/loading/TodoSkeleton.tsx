import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";

function TodoSkeleton() {
  const doneSkeleton = () => {
    return (
      <div className="bg-green-100 shadow-md p-4 rounded-lg border-green-100">
        <h2 className="text-xl font-semibold mb-2">Done</h2>

        <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="flex items-center justify-between p-2 bg-green-200 rounded-lg hover:bg-green-300 cursor-pointer"
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
        <h2 className="text-xl font-semibold mb-2">To-do</h2>

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
      <div className="bg-red-100 shadow-md p-4 rounded-lg border-red-100">
        <h2 className="text-xl font-semibold mb-2">Delete</h2>

        <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="flex items-center justify-between p-2 bg-red-200 rounded-lg hover:bg-red-300 cursor-pointer"
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
