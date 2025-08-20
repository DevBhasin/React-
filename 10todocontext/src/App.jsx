import { useEffect, useState } from 'react'

import './App.css'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
function App() {
  const [todos, setTodos] = useState([])


  const addTodo=(todo)=>{
    setTodos((prev)=> ([{id:Date.now(),...todo},...prev]))//prev mein bhai mere pehle ke saare todos in the form of array of objects aayenge bhai mere 
  }//jab spread operator ka use ho raha hota ha bhai mere to yrr yeh yaad rakhna is very imp ki jo baad mein (,) operator ke likhte h vo is operator ke pehle waale prop ko override kr deta h agar same mil gya to 

const updateTodo=(id,todo)=>{setTodos((prev)=>prev.map((prevTodo)=>( prevTodo.id===id ?todo: prevTodo) ))}



const deleteTodo=(id)=>{
  setTodos((prev)=>(prev.filter((prevTodo)=>(prevTodo.id!==id ))))
}


const toggleComplete=(id)=>{
  setTodos((prev)=>
    (prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))))
}

//local storage bhai mere hamesha value in the form of string hi store krta ha bhai 
useEffect(()=>{

const todos=JSON.parse(localStorage.getItem("todos"))

if(todos && todos.length>0) //yaha length waali condition isliye lagaa rhe h kyunki bhai there is chance ki todo to h pr bhai vo empty array de rha ho aur waha agar ham loop lagaa denge bhai mere jo ki galat ho jaayega aur empty array to ho hi sakta ha n agar ham todos saare delete kr deneg then we will left with empty array only aur in that case there will be problem if u go for loop bhai 

{
  setTodos(todos)
}

},[])




//kayi baar aisa hoga jab ek hi application mein ek se jyaada useEffect banaa rhe h honge bhai mere

useEffect(()=>{

localStorage.setItem('todos',JSON.stringify(todos))


},[todos])



  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete }}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       
                     {
                      todos.map((todo)=>(
                        <div  key={todo.id}  className='w-full' > {/* key is very imp tabhi bhai react acche se differentiate kr paayega bhai har ek todo wrna bhai processing boht jyaada slow ho jaayegi aur bhai mere confusion bhi ho sakti h react ko ki kisko render krna ha kabhi kabhi  so it is very imp bhai  */}
                             
                         <TodoItem todo={todo} />

                        </div>
                      ))
                     }  
                       
                
                   
                   
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
