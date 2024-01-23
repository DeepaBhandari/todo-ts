import React from 'react'
import "./styles.css"
import { Todo } from './modal';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const TodoList: React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className="container">
    <div className="todos">
        <span className="todos__heading">
            Active Tasks
        </span>
        { todos.map(todo=>(
           <SingleTodo todo ={todo} key={todo.id} todos={todos}
           setTodos={setTodos}
           />
        ))
        }
        
        </div>
        <div className="todos remove">
        <span className="todos__heading">
            Completed Tasks
        </span>
        { todos.map(todo=>(
           <SingleTodo todo ={todo} key={todo.id} todos={todos}
           setTodos={setTodos}
           />
        ))
        }
        </div>
        </div>
  )
}

export default TodoList