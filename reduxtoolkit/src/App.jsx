import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='bg-yellow-600'><h1>Learn about redux toolkit</h1> </div>
   <AddTodo/>
   <Todos/>
    </>
  )
} 

export default App
