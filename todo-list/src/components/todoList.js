import react from 'react'
import { RiCloseCircleLine } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";

const TodoList = (props) => {

 return props.todos.map((todo, i) => (
<div>
        <div key={todo.id} style={{backgroundColor: i%2===0 ? 'white' : 'grey'}}>
          {todo.text}
          <RiCloseCircleLine />
        <RiEdit2Line />
        </div>


</div>


 ))

}

export default TodoList