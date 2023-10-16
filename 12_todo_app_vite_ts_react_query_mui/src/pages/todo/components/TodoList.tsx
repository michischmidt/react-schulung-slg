import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  useAddTodo,
  useDeleteTodo,
  useGetTodos,
  useUpdateTodos,
} from "../../../services/todo-service";
import { TodoItem } from "./TodoItem";
import { Todo } from "../todo";

export const TodoList = () => {
  const [input, setInput] = useState("");
  const { data: todos, isLoading: todoIsLoading } = useGetTodos();
  const { mutate: mutateAddTodo, isLoading: mutateAddTodoIsLoading } =
    useAddTodo();
  const { mutate: mutateUpdateTodo } = useUpdateTodos();
  const { mutate: mutateDelteTodo } = useDeleteTodo();

  const handleAddTodo = async () => {
    mutateAddTodo({ todo: input, completed: false, userId: 1 });
  };

  const handleUpdateTodo = async (todo: Todo) => {
    mutateUpdateTodo(todo);
  };

  const handleDeleteTodo = async (todo: Todo) => {
    mutateDelteTodo(todo);
    alert("Löschen erfolgreich, aber kann nicht vom Server gelöscht werden.");
  };

  return (
    <Box
      p={4}
      display="flex"
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems="center"
    >
      <Box>
        <Typography variant="h2">Meine Todo's</Typography>
        <Box justifyItems="center" display="flex" pt={2}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
            label="Todo hier eingeben"
          />
          <Button variant="outlined" sx={{ ml: 1 }} onClick={handleAddTodo}>
            Hinzufügen
          </Button>
        </Box>
      </Box>
      <Box>
        {todoIsLoading || mutateAddTodoIsLoading ? (
          <CircularProgress sx={{ my: 2 }} />
        ) : (
          <ul>
            {todos?.map((todo) => (
              <Box key={todo.id}>
                <TodoItem
                  todo={todo}
                  handleUpdateTodo={handleUpdateTodo}
                  handleDeleteTodo={handleDeleteTodo}
                />
              </Box>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  );
};
