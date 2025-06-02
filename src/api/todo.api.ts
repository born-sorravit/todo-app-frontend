import httpClient from "@/utils/httpClient";

const getTodos = async () => {
  const path = `/common/todos`;
  const response = await httpClient().get(path);
  return response;
};

const createTodo = async ({ task }: { task: string }) => {
  const path = `/common/todos`;
  const response = await httpClient().post(path, { task });
  return response;
};

const updateDone = async (id: string) => {
  const path = `/common/todos/update-done/${id}`;
  const response = await httpClient().patch(path);
  return response;
};

const updateDelete = async (id: string) => {
  const path = `/common/todos/update-delete/${id}`;
  const response = await httpClient().patch(path);
  return response;
};

export const TodoServices = {
  getTodos,
  createTodo,
  updateDone,
  updateDelete,
};
