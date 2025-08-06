import {useState,useEffect} from "react"


//bhai useState aur useEffect yeh dono hooks render time pr hi use kr sakte ho kyunki useState to hota hi ha bc state change krne ke liye UI mein aur useEffect ke andar likha koi bhi function render complete hone ke baad hi execute  hota ha 

//useEffect ka use must h agar kuch bhi async ya side effect ka use ho rha h function component mein 

//kyunki bhai react hamesha chahta h ki uska jo render h vo hassle free ho usmein agar side effects aa gye ya koi us wakt calling ho gyi jab vo browser mein render kr rha h to bhai vo cconfuse ho jaayega ki yeh kya ho rha ha so it is very imp


//custom is nothing bhai ek function hi ha bas yrr jo  nuilt-in hooks use kr sakta ha aur agar ek logic kyi component mein use ho rha h to bhai repetition bachaane ke liye banana padhta ha 

//same UI+Logic ek function component bnaao 

//only same   Logic bhai custom hooks bnaao

//only UI obvious h yrr component bnaao yrr


function  useCurrencyInfo(currency)
{
    useEffect(()=>{fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)},[])
}