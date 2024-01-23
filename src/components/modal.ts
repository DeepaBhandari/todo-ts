export interface Todo{
    id:number;
    todo:string;
    isDone: boolean;
}
// type Actions =|{
//     type:'add',
//     payload: string
// }|{
//     type:'remove',
//     payload: number
// }|
// {
//     type:'done',
//     payload: number
// }
// import React,{useReducer} from 'react'
// const TodoReducer = (state: Todo[],action)=>{
//    switch(action.type){
//     case "add":
//         return[
//             ...state,
//             {id: Date.now(), todo: action.payload, isDone: false}
//         ];
//         case "remove":
//             return state.filter((todo)=> todo.id !== action.payload)
//    }
// }
// const ReducerExample = () => {
//     const [state, dispatch] useReducer(TodoReducer, [])
//   return (
//     <div>modal</div>
//   )
// }

// export default modal