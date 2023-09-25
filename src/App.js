import React ,{useState} from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header.js'
import TodoList from './components/TodoList.js'

const App = () => {
  const [input,setInput] = useState('');
  const [todos , setTodos] = useState([]);
  const [editedItem , setEditedItem ] = useState(null)
  return (
    <div className='container'>

      <div className='app-wrapper'>
        <Header />
        <Form 
        setInput={setInput}
        input={input}
        todos={todos}
        setTodos={setTodos}
        editedItem={editedItem}
        setEditedItem={setEditedItem}

        />
        <TodoList 
        todos={todos}
        setTodos={setTodos}
        editedItem={editedItem}
        setEditedItem={setEditedItem}


        />


      </div>
      

    </div>
  )
}

export default App








// import React ,{useState ,useEffect} from 'react'
// import './App.css'
// import Form from './components/Form'
// import Header from './components/Header'
// import TodoList from './components/TodoList'

// const App = () => {
  

//   const [input , setInput ] = useState("");
//   const [todos , setTodos ] = useState([]);
//   const [editTodo , setEditTodo ] = useState(null);
//   const [total , setTotal ] = useState(2);
//   const [completedItems , setCompletedItems ] = useState(3);

//   useEffect(()=>{
//     setTotal( todos.length)
//     const newTodoTest = todos.filter( todo => todo.completed )
//     console.log('new todo test',newTodoTest)
//     setCompletedItems(newTodoTest.length)
    

//   },[todos,setTodos])
//   return (
//     <div className='container'>
//       <div className='app-wrapper'>
//         <div>
//           <Header
//           total={total}
//           completedItems={completedItems}
//           />
//         </div>
//         <div>
//           <Form 
//           input={input}
//           setInput={setInput}
//           todos={todos}
//           setTodos={setTodos}
//           editTodo={editTodo}
//           setEditTodo={setEditTodo}
//           />
//         </div>
//         <div>
//           <TodoList 
//           todos={todos}
//           setTodos={setTodos}
//           setEditTodo={setEditTodo}
//           />
//         </div>
//       </div>


//     </div>
//   )
// }

// export default App