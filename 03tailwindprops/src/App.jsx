import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
//jsx mein yeh assume kiya jaata ha ki sabhi tag ka closing tag jaroor h wrna error de dega 

/* 
   in html elements ke andar class ="" 
   in js class ko access kroge className hoga setAttribute kroge to "class"
   in jsx kyunki hm js mein html likh rhe hote ha aur js mein clss keyword reserved h as u know very well class krke aa chuka h in js that's why we use className as in js we mostly use camel case  
*/


//in tailwind library of css jo bhi styling hoti h vo class attribute ke andar hi hoti ha bhai aur har ek class ek unique styling kr rhi hoti ha hamein alag se css likhne ki as such koi need nhi hoti ha bhai mere syntax obvious h yrr library h to kuch to difference hoga hi syntax mein vhi same styling ka alg syntax hona to but obvious h bhai vrna fir css individually hi use kr rhe hote 





  return (
    <>
    <h1 className="text-black bg-neutral-700  border-3 border-cyan-600   rounded-xl px-2 m-4">Tailwind test</h1>
    
    <Card learner={"Dev"} newArr={[12,45,78]}  /> 
    

    
    </>
  )
}

export default App
