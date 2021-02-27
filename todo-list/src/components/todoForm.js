import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const hadleSubmit = (e) => {
      e.preventDefault()
      props.pushData({
        id: Math.floor((Math.random() * 1000)),
        text: input
      })

    }

    return (
        <div>
            <form className="todo-form">
                <input
                    placeholder={`${props.edit ? 'update' : 'add'} a todo`}
                    value={input}
                    onChange={handleChange}
                    className='todo-input'
                />
                <button className="todo-button"
                onClick={hadleSubmit}
                > {props.edit ? 'update' : 'add'}</button>
            </form>
        </div>
    )
}


export default TodoForm
