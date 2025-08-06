import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User from "./components/User/User.jsx"
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,//yeh bhai mere poora layout aa jaayega uske baad children jo h outlet ki jagah hi kaam krte h ise hi kehte h nested routing bhai mere 
//     children:[
//       {
// path:"",
// element:<Home/>
//       },
//       {
//         path:"about",//ab hamein kya krna ha jo NavLink hamne bnaaya ha usmein to ki jagah vo URL dena hoga bhai mere jo show hoga browser pr tabhi yeh element render hoga bhai mere 
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])



//another way of creating router 


//kisi bhi route ko ham self closing bhi bnaa sakte h  

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route
      loader={githubInfoLoader}//loader ke andar hm call back function bhi likh sakte h but jo ham kr rhe h that is more optimal way bhai mere
       path='github'
        element={<Github/>}></Route>
{/* 
Component render hone se pehle run hota hai

Aur jo bhi data return karta hai, wo useLoaderData() se component mein milta hai

Loader = "component render hone se pehle ka data fetcher" */}

 </Route> 
  )
  
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>  
  </StrictMode>,
)
