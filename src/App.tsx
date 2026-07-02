import { useState } from 'react'
import './App.css'
import type { Todo } from './types/todo'

function App() {
  const [text, setText] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const addTodo = () => {
    const newTodo : Todo = {
      id : crypto.randomUUID(),
      text : text
    }
    setTodos(prev=>[...prev, newTodo])
    setText('')
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange}  onKeyDown={(e) => e.key === 'Enter' && addTodo()}></input>
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}

export default App
