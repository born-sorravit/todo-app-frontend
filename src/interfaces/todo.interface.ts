import { ETodoStatus } from "@/enums/Todo.enum";

export interface ITodos {
  id: string;
  task: string;
  status: ETodoStatus;
}

export interface ITodosResponse {
  todo: ITodos[];
  done: ITodos[];
  delete: ITodos[];
}
