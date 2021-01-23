import react from 'react'

const TodoList = (props) => {

 return props.todos.map((todo, i) => (
    <div key={todo.id}>
    {todo.text}
    </div>
 ))

}

export default TodoList