import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ETodoStatus } from "@/enums/Todo.enum";

interface FilterTodoProps {
  setFilter: React.Dispatch<React.SetStateAction<ETodoStatus>>;
}

function FilterTodo({ setFilter }: FilterTodoProps) {
  return (
    <Select
      defaultValue={ETodoStatus.ALL}
      onValueChange={(value) => setFilter(value as ETodoStatus)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="ALL" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ETodoStatus.ALL}>All</SelectItem>
        <SelectItem value={ETodoStatus.TODO}>Todo</SelectItem>
        <SelectItem value={ETodoStatus.DONE}>Done</SelectItem>
        <SelectItem value={ETodoStatus.DELETE}>Delete</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default FilterTodo;
