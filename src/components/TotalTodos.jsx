import React from 'react'
import { useTodos } from '../store'

export default function TotalTodos() {
  const count=useTodos(state=>state.todos.length)
  return (
    <p className="font-bold">Total: {count}</p>
  )
}
