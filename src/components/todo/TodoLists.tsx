import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import DeleteDialog from "../Dialog/DeleteDialog";
import useToastStore from "@/store/toast/toast.store";
import { toast } from "sonner";
import { ITodos } from "@/interfaces/todo.interface";

interface TodoListsProps {
  data: ITodos[];
  setData: React.Dispatch<React.SetStateAction<ITodos[]>>;
  setDoneLists: React.Dispatch<React.SetStateAction<ITodos[]>>;
  setDeleteLists: React.Dispatch<React.SetStateAction<ITodos[]>>;
}
function TodoLists({
  data,
  setData,
  setDoneLists,
  setDeleteLists,
}: TodoListsProps) {
  const { setOpen: setOpenToast } = useToastStore();

  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState<string>();

  const handleOpenModal = (id: string) => {
    setCurrentId(id);
    setOpenModal(true);
  };

  const handleDone = (id: string) => {
    setDoneLists((prev) => [...prev, data.find((todo) => todo.id === id)!]);

    setData((prev) => [...prev.filter((todo) => todo.id !== id)]);
    setOpenToast(
      "SuccessToast",
      toast.success("Success", {
        className: "!bg-green-400 !border-green-400",
        description: `Done task id : ${currentId}`,
      })
    );
  };

  const handleDelete = () => {
    setDeleteLists((prev) => [
      ...prev,
      data.find((todo) => todo.id === currentId)!,
    ]);
    setData((prev) => prev.filter((todo) => todo.id !== currentId));
    setOpenToast(
      "SuccessToast",
      toast.success("Success", {
        className: "!bg-green-400 !border-green-400",
        description: `Delete task id : ${currentId}`,
      })
    );
  };
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border">
      <h2 className="text-xl font-semibold mb-2">To-do</h2>

      <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
        <div className="space-y-2">
          {data.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  className="rounded-full h-5 w-5 cursor-pointer hover:border-green-500"
                  onClick={() => handleDone(todo.id)}
                />
                <div className="capitalize">
                  <h5 className="font-semibold ">{todo.title}</h5>
                  <p className="text-sm text-gray-600">{todo.description}</p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-shadow-red-300 hover:bg-transparent cursor-pointer"
                onClick={() => {
                  handleOpenModal(todo.id);
                }}
              >
                <Trash className="w-4 h-4 cursor-pointer" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
      <DeleteDialog
        open={openModal}
        setOpen={setOpenModal}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default TodoLists;
