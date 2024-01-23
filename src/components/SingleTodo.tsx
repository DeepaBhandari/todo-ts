import React from 'react'
import { Todo } from './modal'
type Props = {
 todo: Todo,
 todos: Todo[],
 setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo= ({todo, todos, setTodos}: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">
        {todo.todo}
      </span>
    </form>
  )
}

export default SingleTodo