import React ,{useEffect} from 'react'
import {v4 as uuidv4}  from 'uuid'

const Form = ({input ,setInput, todos, setTodos , editedItem , setEditedItem}) => {
  
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!editedItem){
      
      if(input != ''){
        setTodos([...todos,{id:uuidv4(), title:input , completed: false}])
        setInput('')

      } 
      

    } else {
     
        setTodos(todos.map( todo => editedItem.id === todo.id ? {id:todo.id,title:input,completed:editedItem.completed} : todo))
        setEditedItem('')
        setInput('')
    }
  }

  useEffect(()=>{
    if(editedItem)
    setInput(editedItem.title)

  },[editedItem])
  
  return (
   <form  onSubmit={handleSubmit} className='form'>
      <input type='text' value={input} onChange={handleInput}  className='task-input' placeholder='Write a todo...'/>

      <button type='submit' className='button-add'>Add</button>

   </form>
  )
}

export default Form




























// import React , {useEffect} from 'react'
// import {v4 as uuidv4 } from 'uuid';

// const Form = ({input,todos,setInput,setTodos ,editTodo ,setEditTodo}) => {

//     const handleInput  =(e) => {
//         setInput(e.target.value)

//     }

//     const updateTodo  = (title , id ,completed ) => {
//         const newTodo = todos.map( (todo) =>
//             todo.id === id ? {id,title,completed} : todo 
//         )

//         setTodos(newTodo);
//         setEditTodo('');

//     }

//     useEffect( () =>{
//         if(editTodo) {
//             setInput(editTodo.title);
//         } else{
//             setInput("");
//         }
//     },[setInput,editTodo])

//     const hanldeFormSubmit = (e) => {
//         e.preventDefault();
//         if(!editTodo){ 
//             setTodos([...todos,{id: uuidv4(), title:input , completed: false}])
//             setInput('')

//         } else {
//             updateTodo(input, editTodo.id, editTodo.completed)
//         }
        
//     }   

   
//     return (
//         <form onSubmit={hanldeFormSubmit} > 

//             <input type="text" value={input} onChange={handleInput} placeholder='Enter a Todo...' className='task-input' />
//             <button  className="button-add" type="submit" >
//                 Add
//             </button>

//         </form>
//     )
// }

// export default Form