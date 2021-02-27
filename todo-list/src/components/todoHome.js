import react, { useState } from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'

const TodoHome = () => {
const [todos, setTodos] = useState([])

const addTodos = (todo) => {
  const newTodos = [todo, ...todos]
  setTodos(newTodos)
  console.log(todos)
}
const removeTodo = (id) => {
  const filteredArray = [...todos].filter(todo => todo.id !== id)
  setTodos(filteredArray)
}

const udpateTodo = () => {
// update logic
}

  return(
    <div>
      <h1>Whats the plan for today? </h1>
      <TodoForm pushData={addTodos} />
      <TodoList todos={todos} removeTodo={removeTodo} udpateTodo={udpateTodo}/>
    </div>
  )
}

export default TodoHome