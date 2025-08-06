
import React from 'react'

import {useState} from 'react'

 //in jsx style is a js object but in normal html style is an attribute that's why synta xis different 

  //<div  style={{backgroundColor:"#212121"}} ></div>
  //jab yeh return mein likha to koi UI mein change reflect nhi hua kyunki react is a js library which say ki UI mein jo bhi changes honge vo main control krungi uske liye hi usne hooks diye useState hook is for state change bhai 

function App() {
 const [color,setColor]=useState('white')
 //yeh project shi hi  banaa ha bhai mere bas jo bhi ha thoda css daalna ha vo agr dal dunga to exact ban jaayega but baad mein css dekhenge dsa ke bhi baad
  return (
    <>

<div  style={{backgroundColor:color}} >
<div>
  <button onClick={()=>setColor("Red")}  className="text-white bg-red-500 rounded-xl px-4">Red</button>

</div>


</div>
      
    </>
  )
}

export default App
