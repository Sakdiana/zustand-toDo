import React from "react";
import { useFilter } from "../store";

export default function Filter() {
  const {filter,setFilter} = useFilter();


  return (
    <div className="flex gap-2 mt-8">
      <button 
      onClick={()=>setFilter('all')}
        disabled={filter === "all"}
        className={`px-4 py-2 rounded ${
          filter === "all"
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-teal-500 text-white hover:bg-teal-600"
        }`}
      >
        All
      </button>

      <button
       onClick={()=>setFilter('uncompleted')}
        disabled={filter === "uncompleted"}
        className={`px-4 py-2 rounded ${
          filter === "uncompleted"
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-teal-500 text-white hover:bg-teal-600"
        }`}
      >
        Not completed
      </button>

      <button
       onClick={()=>setFilter('completed')}
        disabled={filter === "completed"}
        className={`px-4 py-2 rounded ${
          filter === "completed"
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-teal-500 text-white hover:bg-teal-600"
        }`}
      >
        Completed
      </button>
    </div>
  );
}
