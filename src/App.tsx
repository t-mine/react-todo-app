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

  const deleteTodo = (id: string) => {
    setTodos(prev=>prev.filter(todo=>todo.id !== id))
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange}  onKeyDown={(e) => e.key === 'Enter' && addTodo()}></input>
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo=>(
          <li key={todo.id}>{todo.text}<button onClick={()=>deleteTodo(todo.id)}>削除</button></li>
        ))}
      </ul>
    </>
  )
}

export default App
