import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ClipboardList, Trash } from "lucide-react";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import DeleteDialog from "../Dialog/DeleteDialog";
import useToastStore from "@/store/toast/toast.store";
import { toast } from "sonner";
import { ITodos } from "@/interfaces/todo.interface";
import { TodoServices } from "@/api/todo.api";

interface TodoListsProps {
  data: ITodos[];
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}
function TodoLists({ data, setRefresh }: TodoListsProps) {
  const { setOpen: setOpenToast } = useToastStore();
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState<string>();

  const handleOpenModal = (id: string) => {
    setCurrentId(id);
    setOpenModal(true);
  };

  const handleDone = async (id: string) => {
    try {
      const { data } = await TodoServices.updateDone(id);
      if (data) {
        console.log(data);
        setRefresh(true);
        setOpenToast(
          "SuccessToast",
          toast.success("Success", {
            className: "!bg-green-400 !border-green-400",
            description: `Done task id : ${id}`,
          })
        );
      }
    } catch (error) {
      console.log({ error });
      setOpenToast(
        "ErrorToast",
        toast.error("Error", {
          className: "!bg-red-400 !border-red-400",
          description: `Can't update task id : ${id}`,
        })
      );
    }
  };

  const handleDelete = async () => {
    try {
      const { data } = await TodoServices.updateDelete(currentId as string);
      if (data) {
        console.log(data);
        setRefresh(true);
        setOpenToast(
          "SuccessToast",
          toast.success("Success", {
            className: "!bg-green-400 !border-green-400",
            description: `Delete task id : ${currentId}`,
          })
        );
      }
    } catch (error) {
      console.log({ error });
      setOpenToast(
        "ErrorToast",
        toast.error("Error", {
          className: "!bg-red-400 !border-red-400",
          description: `Can't update task id : ${currentId}`,
        })
      );
    }
  };
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border">
      <h2 className="flex items-center gap-2 text-xl font-semibold mb-2">
        <ClipboardList size={18} />
        To-do
      </h2>

      <ScrollArea className="h-[500px] w-full rounded-none border-none p-4">
        <div className="space-y-2">
          {data.map((todo, index) => (
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
                  <h5 className="font-semibold ">Task : {index + 1}</h5>
                  <p className="text-sm text-gray-600">{todo.task}</p>
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
