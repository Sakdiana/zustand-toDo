import React, { useRef, useState } from "react";

export default function NewTodo() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();

  const handleAddTodo = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Кнопка открытия */}
      <button
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
        onClick={() => setIsOpen(true)}
      >
        Add new Todo
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black opacity-40"
            onClick={() => setIsOpen(false)}
          />

          {/* sidebar */}
          <div className="relative w-80 bg-white shadow-lg h-full p-6 z-50">
            {/* close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* header */}
            <h2 className="text-xl font-semibold mb-4">Create new todo</h2>

            {/* input */}
            <input
              ref={inputRef}
              autoFocus
              placeholder="Type your task..."
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
            />

            {/* footer */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="border px-4 py-2 rounded text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
