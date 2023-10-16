import { useQuery, useQueryClient, useMutation } from "react-query";
import { client } from "../util/http-common";
import { Todo, TodoDTO } from "../pages/todo/todo";

export const useGetTodos = () =>
  useQuery<Todo[], Error>(["todos"], async () => {
    const response = await client.get("https://dummyjson.com/todos");
    return response.data.todos;
  });

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(async (todo: TodoDTO): Promise<void> => {
    await client.post("https://dummyjson.com/todos/add", { todo });

    await queryClient.invalidateQueries({ queryKey: ["todos"] });
  });
};

export const useUpdateTodos = () => {
  const queryClient = useQueryClient();

  return useMutation(async (todo: Todo): Promise<void> => {
    await client.put(`https://dummyjson.com/todos/${todo?.id}`, { todo });

    await queryClient.invalidateQueries({ queryKey: ["todos"] });
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(async (todo: Todo): Promise<void> => {
    await client.delete(`https://dummyjson.com/todos/${todo?.id}`);

    await queryClient.invalidateQueries({ queryKey: ["todos"] });
  });
};
