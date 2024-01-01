import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleAddTodo = () => {
    const newTodo = { title, description }
    setTodos([...todos, newTodo])
    setTitle('')
    setDescription('')
  }
  return (
    <>
      <div>
        
      </div>
      <h1>Todo + React</h1>
      <div className="card">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" placeholder="Enter title" onChange={handleTitleChange} />
        <br /> <br />
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" placeholder="Enter description" onChange={handleDescriptionChange} />
        <br /> <br />
        <button onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <div>
        <h2>Todos:</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <strong>{todo.title}:</strong> {todo.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
