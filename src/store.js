import { title } from "framer-motion/client";
import { create } from "zustand";

export const useTodos = create((set,get) => ({
  todos: [
    { id: 1, title: "Learn JS", completed: true },
    { id: 2, title: "Learn React", completed: false },
  ],
  loading: false,
  error: null,
  // addTodo:(title)=>set(state=>{
  //     const newTodo={id:new Date(),title,completed:false}

  //     return{
  //         todos:[...state.todos,newTodo]
  //     }
  // })

//   addTodo: (title) =>
//     set((state) => ({
//       todos: [
//         ...state.todos,
//         {
//           id: new Date(),
//           title,
//           completed: false,
//         },
//       ],
//     })),


addTodo:(title)=>{
    const newTodo={id:new Date(),completed:false,title}
    set(
        {todos:[...get().todos,newTodo]}
    )
},

toggleTodo:(todoId)=>set ({
    todos:get().todos.map(todo=>todoId===todo.id?{...todo,completed:!todo.completed}:todo)

})

}));
