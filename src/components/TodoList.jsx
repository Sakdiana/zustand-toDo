import React from "react";
import { useFilter, useTodos } from "../store";

const Todo = ({ id, title, completed }) => {
  const toggleTodo=useTodos(state=>state.toggleTodo)
  return (
    <div className="flex items-center gap-4">
      <input
      onChange={()=>toggleTodo(id)}
        type="checkbox"
        checked={completed}
        readOnly
        className="w-4 h-4 accent-teal-500"
      />
      <span className={completed ? "line-through text-gray-500" : ""}>
        {title}
      </span>
    </div>
  );
};

const TodoList = () => {
  const filter = useFilter((state) => state.filter);
const todos = useTodos((state) => state.todos);

const filteredTodos = todos.filter((todo) => {
  if (filter === "completed") return todo.completed;
  if (filter === "uncompleted") return !todo.completed;
  return true;
});



  return (
    <div className="flex flex-col gap-4 min-h-[300px]">
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
