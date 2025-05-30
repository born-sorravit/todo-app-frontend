"use client";
import DeleteLists from "@/components/todo/DeleteLists";
import DoneLists from "@/components/todo/DoneLists";
import FilterTodo from "@/components/todo/FilterTodo";
import TodoInput from "@/components/todo/TodoInput";
import TodoLists from "@/components/todo/TodoLists";
import { ETodoStatus } from "@/enums/Todo.enum";
import { ITodos } from "@/interfaces/todo.interface";
import React, { useState } from "react";

function HomeViews() {
  const [todoLists, setTodoLists] = useState<ITodos[]>(todos);
  const [doneLists, setDoneLists] = useState<ITodos[]>([]);
  const [deleteLists, setDeleteLists] = useState<ITodos[]>([]);
  const [filterTodo, setFilterTodo] = useState<ETodoStatus>(ETodoStatus.ALL);

  const renderTodoByStatus = () => {
    if (filterTodo === ETodoStatus.TODO) {
      return (
        <TodoLists
          data={todoLists}
          setData={setTodoLists}
          setDoneLists={setDoneLists}
          setDeleteLists={setDeleteLists}
        />
      );
    } else if (filterTodo === ETodoStatus.DONE) {
      return <DoneLists data={doneLists} setData={setDoneLists} />;
    } else if (filterTodo === ETodoStatus.DELETE) {
      return <DeleteLists data={deleteLists} setData={setDeleteLists} />;
    }
    return (
      <>
        <TodoLists
          data={todoLists}
          setData={setTodoLists}
          setDoneLists={setDoneLists}
          setDeleteLists={setDeleteLists}
        />
        <DoneLists data={doneLists} setData={setDoneLists} />
        <DeleteLists data={deleteLists} setData={setDeleteLists} />
      </>
    );
  };
  return (
    <div className="container mx-auto pt-5">
      <div className="space-y-2">
        <h1 className=" font-semibold text-lg">Create new task</h1>
        <TodoInput setData={setTodoLists} />
        <FilterTodo setFilter={setFilterTodo} />
      </div>
      <div className="pt-10 grid grid-cols-3 gap-4">{renderTodoByStatus()}</div>
    </div>
  );
}

export default HomeViews;

const todos = [
  {
    id: "1",
    title: "task 1",
    description: "description 1",
    status: "TODO",
  },
  {
    id: "2",
    title: "task 2",
    description: "description 2",
    status: "TODO",
  },
  {
    id: "3",
    title: "task 3",
    description: "description 3",
    status: "TODO",
  },
  {
    id: "4",
    title: "task 4",
    description: "description 4",
    status: "TODO",
  },
  {
    id: "5",
    title: "task 5",
    description: "description 5",
    status: "TODO",
  },
  {
    id: "6",
    title: "task 6",
    description: "description 6",
    status: "TODO",
  },
  {
    id: "7",
    title: "task 7",
    description: "description 7",
    status: "TODO",
  },
  {
    id: "8",
    title: "task 8",
    description: "description 8",
    status: "TODO",
  },
  {
    id: "9",
    title: "task 9",
    description: "description 9",
    status: "TODO",
  },
  {
    id: "10",
    title: "task 10",
    description: "description 10",
    status: "TODO",
  },
];
