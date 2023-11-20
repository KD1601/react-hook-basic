import { useState } from 'react';


const Todo = (props) => {
    const { todos, title, deleteTodo } = props
    const handleDelete = (id) => {
        deleteTodo(id)
    }
    return (
        <div className='todo-container'>
            <div className='title'>{title}</div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <li className='todo-child' >{item.title}
                            &nbsp; <span onClick={() => handleDelete(item.id)}> x</span>
                        </li>
                    </div>
                )
            })
            }
            <hr />
        </div>
    )
}

export default Todo