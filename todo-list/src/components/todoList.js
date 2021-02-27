import react, { useState } from 'react'
import { RiCloseCircleLine } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import TodoForm from './todoForm';

const TodoList = ({todos, removeTodo,udpateTodo}) => {
const [edit, setEdit] = useState({id: null, text: ''})

const submitUpdate = () => {
// logic
//setEdit({id: null, text: ''})
}

if(edit.id){
  return <TodoForm edit={edit} submitUpdate={submitUpdate}/>
}
 return todos.map((todo, i) => (
<div>
        <div key={todo.id} style={{backgroundColor: i%2===0 ? 'white' : 'grey'}}>
          {todo.text}
          <RiCloseCircleLine onClick={()=> removeTodo(todo.id)}/>
          <RiEdit2Line onClick={() => setEdit({id: todo.id, text: todo.text})} />
        </div>


</div>


 ))

}

export default TodoList