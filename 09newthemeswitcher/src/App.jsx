import { useEffect, useState } from 'react'

import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/ThemeContext'

function App() {
const [themeMode,setTheme ] = useState('light')

  function darkTheme(){
    setTheme('dark')   //bhai yeh sab khali ek variable ha themeMode usmein changes krenge accordingly bhai mtlb input mein jab changes honge uske hisaab se bhai mere  keval themeMode ki value hi change ho rhi hogi bhai ji but us themeMode ki value ke hisaab se actual ui mein changes bhi to krne padhenge yaha pr aata ha bhai hamaara 
  }

  function lightTheme(){    //yaha pr hi define kr diya ha n darkTheme aur lightTheme function to yeh apne aap jaha hmane context bnaaya ha usmein jo as a default lene ki sochi thi waha value chali gyi hogi aur kyunki darkTheme,lightTheme already access le rakhi ha setTheme ka to yeh bhi automatically as a prop chale jaayega bhai mere
    setTheme('light')
  }

//actual jo rendering ham kr rhe ha bhai mere vo koi hawaa mein nhi hogi kuch  bhi hawaa mein nhi hota h uske liye ham classic javascript ka use krenge bhai mere 


useEffect(()=>{
  
document.querySelector('html').classList.remove('light','dark')
document.querySelector('html').classList.add(themeMode)
  

},[themeMode])



  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}} >

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
<ThemeBtn/>

                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App

