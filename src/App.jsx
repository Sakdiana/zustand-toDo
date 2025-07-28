import './App.css';

import Filter from './components/Filter';
import TodoList from './components/TodoList';
import TotalTodos from './components/TotalTodos';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Filter />
      <TodoList />
      <hr className="w-full border-gray-300" />
      <TotalTodos />
      <NewTodo />
    </div>
  );
}

export default App;
