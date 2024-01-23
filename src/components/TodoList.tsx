import React from 'react'
import "./styles.css"
import { Todo } from './modal';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const TodoList: React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className="todos">
        { todos.map(todo=>(
            <li>{todo.todo}</li>
        ))
        }
        </div>
  )
}

export default TodoList