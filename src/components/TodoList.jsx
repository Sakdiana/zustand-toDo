import React from "react";
import { useTodos } from "../store";

const Todo = ({ id, title, completed }) => {
  return (
    <div className="flex items-center gap-4">
      <input
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
  const todos = useTodos(state=>state.todos)


  return (
    <div className="flex flex-col gap-4 min-h-[300px]">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
