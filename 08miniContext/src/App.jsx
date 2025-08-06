import { useState } from 'react'
import Login from './components/login/Login'
import Profile from './components/login/Profile'
import UserContextProvider from './contexts/UserContextProvider'
import './App.css'

function App() {

  
  const [count, setCount] = useState(0)



  // Context API ek built-in React feature hai jo humein data ko multiple components ke beech share karne ki power deta hai bina props drilling ke


  return (
    <UserContextProvider>
     <h1> React with Chai</h1>
          <Login  />
          <Profile />
    </UserContextProvider>
  )
}

export default App
