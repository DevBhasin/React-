import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 //let [counter,setCounter]=useState(0)  yeh allowed nhi haa bhai hook keval react function component ke andar hi sab krta ha wrna poor aweb page hi samjho khatam ho jaata ha 


// u know n waise normal js type cheeje to tum kr skte ho jaise function bnaana ek aur aur usko app function ke andar call kr dena and all but react usko UI mein show nhi krega uske liye hi hooks hote h aur hooks hamesha main component ke andar hi call kiye jaate ha 

// let counter=5

// function addvalue()
// {
//   // setCounter(counter++)            //yeh console mein to change krega pr UI mein nhi yahi pr react main powerful kaam mein aata h vo kehta h ki UI pr kya changes honge kya nhi yeh main decide krunga aur iske liye vo hamein deta ha Hooks .Now hooks are of various types ham unmein se kuch jo imp h vo padhenge abhi ke liye variable mein changes ko UI mein show krne ke liye hook hota ha useState
//  counter++
//  console.log(counter);
 
// }


function App()
 {
let [counter,setCounter]=useState(0)
let addvalue=()=>{

//setCounter(()=>{})<- yeh ek call back function andar rakhta ha jo ki hidden hota ha but in case we want ki baar baar setCounter update kre hamaare counter ko to hmein call back function ke through counter dena padhega as a parameter of the call back function usk ebaad uske return waale area mein updation krenge isse har baar jab call back function call hoga to updated value hi vo la rha hoga as a parameter

    if(counter<5 )
  setCounter(++counter)//kitna imp tha bhai yeh post increament kr rhe the to bhai kaise do baar click pr ek value change ho rhi thi aur main soch rha tha css mein koi kami ha bc chalo now i know
//ptaa h kya ho rha tha jaise ek baar click krne pr counter initial waala hi reh rha tha uske baad jab dobara click krte h tab va;ue change ho rhi thi bhai badhiy seekh mil gyi bc
else
setCounter(counter)

}

let removevalue=()=>{
  if(counter>0)
  {
  setCounter(--counter)
  }
  else
  {
    setCounter(counter)
  }
}

  return (
    <>
          
       <h1>Chai aur React | Dev Bhasin</h1>
      <h2>Counter value: {counter}</h2>

       <button onClick={addvalue}> Add Value</button>
       <br/>
       <br />
       <button onClick={removevalue}> Remove  Value</button>
         
    </>
  )
}

export default App
