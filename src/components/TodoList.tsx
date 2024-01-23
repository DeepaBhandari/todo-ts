import React from 'react'
import "./styles.css"
import { Todo } from './modal';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos,setTodos,completedTodos,setCompletedTodos}) => {
  return (
    <div className="container">
        <Droppable droppableId='TodosList'>
            {
                (provided)=>(
                    <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
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
                )
            }
   
        </Droppable>
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