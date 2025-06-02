"use client";
import { TodoServices } from "@/api/todo.api";
import TodoSkeleton from "@/components/loading/TodoSkeleton";
import DeleteLists from "@/components/todo/DeleteLists";
import DoneLists from "@/components/todo/DoneLists";
import FilterTodo from "@/components/todo/FilterTodo";
import TodoInput from "@/components/todo/TodoInput";
import TodoLists from "@/components/todo/TodoLists";
import { ETodoStatus } from "@/enums/Todo.enum";
import { ITodosResponse } from "@/interfaces/todo.interface";
import React, { useEffect, useState } from "react";

function HomeViews() {
  const [todoLists, setTodoLists] = useState<ITodosResponse>();
  const [filterTodo, setFilterTodo] = useState<ETodoStatus>(ETodoStatus.ALL);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getTodos = async () => {
    try {
      const response = await TodoServices.getTodos();
      if (response.data) {
        const data: ITodosResponse = response.data?.data;
        setTodoLists(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setRefresh(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (refresh) {
      getTodos();
    }
  }, [refresh]);

  const renderTodoByStatus = () => {
    if (filterTodo === ETodoStatus.TODO) {
      return <TodoLists data={todoLists?.todo ?? []} setRefresh={setRefresh} />;
    } else if (filterTodo === ETodoStatus.DONE) {
      return <DoneLists data={todoLists?.done ?? []} />;
    } else if (filterTodo === ETodoStatus.DELETE) {
      return <DeleteLists data={todoLists?.delete ?? []} />;
    }
    return (
      <>
        <TodoLists data={todoLists?.todo ?? []} setRefresh={setRefresh} />
        <DoneLists data={todoLists?.done ?? []} />
        <DeleteLists data={todoLists?.delete ?? []} />
      </>
    );
  };
  return (
    <div className="container mx-auto pt-5">
      <div className="space-y-2">
        <h1 className=" font-semibold text-lg">Create new task</h1>
        <div className="flex justify-between">
          <TodoInput setRefresh={setRefresh} />
          <FilterTodo setFilter={setFilterTodo} />
        </div>
      </div>
      <div className="pt-10 grid grid-cols-3 gap-4">
        {isLoading ? <TodoSkeleton /> : renderTodoByStatus()}
      </div>
    </div>
  );
}

export default HomeViews;
