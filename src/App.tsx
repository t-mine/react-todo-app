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
    if (text.trim() === '') return
    const newTodo : Todo = {
      id : crypto.randomUUID(),
      text
    }
    setTodos(prev=>[...prev, newTodo])
    setText('')
  }

  const deleteTodo = (id: string) => {
    setTodos(prev=>prev.filter(todo=>todo.id !== id))
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo=>(
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=>deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
