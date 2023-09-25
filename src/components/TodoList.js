import React from 'react'

const TodoList = ({todos ,setTodos , editedItem , setEditedItem}) => {
    console.log(todos)



    const handleDelete = (id) => {

        console.log('hanlde delete')
        setTodos( todos.filter(todo => todo.id !== id) )
        
    }

    const handleEdit = (todo) =>{
        
        setEditedItem(todo)
        console.log('edited ', todo)

    }
    const handleComplete = (id) => {
        setTodos(todos.map( todo => todo.id === id ? {...todo,completed:!todo.completed}:todo))

    }
  return (
    <div className='list'>

        {
            todos.map( todo => (
                <li className='item' >
                    <input className={`input ${todo.completed? 'completed' : ''}`}  type='text' value={todo.title}/>
                    
                    <div className='buttons'>
                        <button onClick={() => handleComplete(todo.id)} className=''>comp</button>
                        <button onClick={() => handleEdit(todo)} className=''>edit</button>
                        <button onClick={() => handleDelete(todo.id)} className=''>del</button>

                    </div>

                    



                </li>
            ))
        }

    </div>
  )
}

export default TodoList
























// import React from 'react'

// const TodoList = ({todos, setTodos ,setEditTodo}) => {

//     const handleDelete = (id) => {
//         setTodos(todos.filter((todo) => todo.id !== id))
//     }

//     const handleEdit = ({id}) => {
//         const findTodo = todos.find((todo) => todo.id === id);
//         setEditTodo(findTodo)
//         // console.log(findTodo)
//     }

//     const handleComplete = (todo) => {
//         setTodos(
//             todos.map( item => {
//                 if(item.id === todo.id ){
//                     return {...item , completed: !item.completed}
//                 }
//                 return item;
//             })
//         )

//     }
//   return (
//     <div>
       

//         {
//             todos.map( todo => ( 
//                 <li className='list-item'>
//                     <input
//                     onChange={(e) => e.preventDefault()}
//                     type='text' 
//                     className={`list ${ todo.completed ? 'complete ': ''}`}
//                     value={todo.title}
//                     />

//                     <div >

//                         <button onClick={()=> handleComplete(todo)} className='button-complete task-button'>
//                             <i className="fa fa-check-circle" ></i>
//                         </button>
//                         <button onClick={() => handleEdit(todo)} className='button-edit task-button'>
//                             <i className="fa fa-edit" ></i>
//                         </button>
//                         <button onClick={ () =>  handleDelete(todo.id)} className='button-delete task-button'>
//                             <i className="fa fa-trash" ></i>
//                         </button>

//                     </div>

//                 </li>
//             ))
//         }

//     </div>
//   )
// }

// export default TodoList