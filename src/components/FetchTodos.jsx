import { useTodos } from "../store";

export default function FetchTodos() {
  const loading = useTodos((state) => state.loading);
  const error = useTodos((state) => state.error);
  const fetchTodos = useTodos((state) => state.fetchTodos);

  return (
    <button
      disabled={loading}
      onClick={fetchTodos}
      className={`bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Loading..." : error || "Get todos"}
    </button>
  );
}
