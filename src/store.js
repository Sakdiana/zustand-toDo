import { create } from "zustand";

 export const useTodos=create(set=>({
    todos:[
        { id: 1, title: "Learn JS", completed: true },
    { id: 2, title: "Learn React", completed: false },
    ],
    loading:false,
    error:null,
    addTodo:(title)=>set(state=>{
        const newTodo={id:new Date(),title,completed:false}

        return{
            todos:[...state.todos,newTodo]
        }
    })

 }))
