import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material";
import { Todo } from "../todo";
import DeleteIcon from "@mui/icons-material/Delete";

type TodoItemProps = {
  todo: Todo;
  handleUpdateTodo: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void;
};

export const TodoItem = (props: TodoItemProps) => {
  const { todo, handleUpdateTodo, handleDeleteTodo } = props;

  return (
    <Box display="flex" justifyItems="center">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={todo.todo}
          onClick={() =>
            handleUpdateTodo({ ...todo, completed: !todo.completed })
          }
        />
      </FormGroup>
      <IconButton
        color="error"
        aria-label="delete"
        onClick={() => handleDeleteTodo(todo)}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
