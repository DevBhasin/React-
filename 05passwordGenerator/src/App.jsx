import { useState,useCallback ,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const [numberAllowed,setNumberAllowed]=useState(false)

  const [charAllowed,setCharAllowed]=useState(false)

  const [password,setPassword]=useState('')



const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(numberAllowed)
  { 
    str+="0123456789"
  }

  if(charAllowed)
  {
    str+="!@#$%^&*()[]`~"
  }

  for(let i=0;i<length;i++)
{
let char=Math.floor(Math.random()*str.length)
pass+=str[char]
}

setPassword(pass)

},[length,numberAllowed,charAllowed])

//yeh neeche jo ha bhai mere vo useEffect se related likha ha 

/* 
Case	                                      Include Function in deps?
Function created with useCallback	              ✅ Yes
Function defined inline (inside component)	    ✅ Yes
Function imported from outside file	            ❌ No (doesn't change)
*/ 


const inputref=useRef(null)//ek input reference bnaaya ha 



//useEffect ke andar isliye call kr paa rhe h function ko kyunki yeh render ke baad kaam krwaata ha aise call krne pe error aa jaayega kyunki accd. to react rules render ke time state change nhi kr sakte ha au rham jo function call krna chah rhe ha usmein setPassword ek state change  kr rha ha to isko as a sideeffect lenge aur isliye ham ise useEffect ke andar hi use kr rhe ha 

useEffect(()=>{passwordGenerator()},[length,charAllowed,numberAllowed,passwordGenerator])//passwordGenerator dependency mein lena imp ha kyunki agar koi function ya useCallback agar useEffect ke anadr use kr rhe h to agar denge nhi to bhai function ka reference change ho  sakta ha 


//agar passwordGenerator nhi denge to bhai galat ho jaayega kyunki jab jab length,charAllowed,numberAllowed change hoga to bhai passwordGenerator bhi change hoga bhai aur yeh baat hamm useEffect ko btaa hi nhi rahe honge that's why it is very imp 
 


const copyPasswordToClipboard=()=>{


inputref.current?.select()   //yaha ? iska mtlb h ki conditional diya ha hamne ki agar kuch ho vaha select krne waala to hi select kre 
inputref.current?.setSelectionRange(0,999)
 
navigator.clipboard.writeText(password)
//window.navigator.clipboard.writeText(password)  yaha agar window nhi bhi likhenge to bhi same kaam hoga kyun =ki jab bhi browser mein kaam krte h ham to global elements automatically accessed hote ha ha agar tumne navigator naam ka galti se koi variable bnaa diya h to us case mein window dena padhega jo ki obvious h vrna react confuse hi ho jaayegi ki bc refeerence lena kiska h aur vo local ko hi preference de degi isliye us case mein specify krna is imp 


}


return (


    <>
    
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
<h1 className="text-white-900 text-center">Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>

<input type="text"
 value={password}
className="bg-white outline-none w-full py-1 px-3"
placeholder="Password"
readOnly//isse user kuch input nhi de paayega bhai mere 
ref={inputref}//connect kr diya ha hamne us reference ko input se 
/>

<button onClick={copyPasswordToClipboard} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer">COPY</button>

</div>
<div className="flex text-sm gap-x-2">

<div className="flex items-center gap-x-1">
  <input type="range"
   min={6} 
   max={100} 
  // value={4} // (ismein bhi jo ha slider move nhi kr rha kyunki bhai very simple ha ji in react agr koi bhi UI mein change hona ha to bina react ki knowledge aur permission ke bina nhi ho sakta h bhai wrna krte raho tum code mein variables ki value change UI mein koi fark hi nhi padhega )
   value={length}
   onChange={(e)=>{setLength(e.target.value) }}

//e.target.value is that value jo ki user input de rha hota ha 
//bhai user input agr kr rha ha to uska react ki state ke saath sync hona is very imp bhai that's why onChange is imp it maintains the sync  between the two
   className='cursor-pointer' />

   <label >Length:{length}</label>

</div>
  
  <div className="flex items-center gap-x-1">
    <input type="checkbox"
   checked={numberAllowed}
    id="numberInput"
   onChange={(e)=>{setNumberAllowed(e.target.checked)}}
    />
    <label htmlFor="numberInput">Numbers</label>
  </div>


 <div className="flex items-center gap-x-1">
    <input type="checkbox"
   checked={charAllowed}
    id="charInput"
   onChange={()=>{setCharAllowed((prev)=>{return !prev})}}
    />
    <label htmlFor="charInput">Characters</label>
  </div>




</div>

</div>





    </>
  )
}

export default App
