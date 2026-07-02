import { useState } from 'react'
import './App.css'
import type { Todo } from './types/todo'

function App() {
  const [text, setText] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text : string) => {
    const newTodos = [...todos]
    const max = Math.max(...newTodos.map(todo=>todo.id))
    const newTodo : Todo = {
      id : max + 1,
      text : text
    }
    newTodos.push(newTodo)
    setTodos(newTodos)
  }

  return (
    <>
      <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
      <input type="button" value="追加" onClick={() => addTodo(text)}></input>
      <ul>
        {todos.map(todo=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}

export default App
