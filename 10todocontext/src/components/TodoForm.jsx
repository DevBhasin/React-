
//TodoForm jo ha bhai yeh todo app ke us version ko represent kr rhi hai bhai mere jismein ham todo likh rhe hote h tabhi bhai form wagaara submit ho rha ha 

import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
    //yaha todo string h jo enter kri jaa rhi ha bhai mere 
    
    const[todo,setTodo]=useState('')//yeh jo todo h bhai yeh single todo ke liye h jo actual  mein enter kr rha hoga user 

const{addTodo}=useTodoContext()//addTodo ki jo functionality h bhai mere vo hamne yrr app.jsx mein define kr rakhi ha


// addTodo ki functionality to hamne kahi aur bnaa rakhi ha bhai mere but bhai uska use to yaha kaise krna ha yeh to bhai jaha use krna h jaha call kr rhe h vhi krenge tbhi to bhai mere context bnaaya ha jissse baar baar n bnaana pdhe aur har component access kr sake bhai isko 



const add=(e)=>{

e.preventDefault() 

if(!todo) return

addTodo({todo,completed:false})

setTodo('')//yeh kyunki ek baar bhai jab add call ho jaayega aur todo add wagaara ho jaayega fir bhai jo hamne individual todo ke liye itna kuch bnaaya ha usko clear krna imp hoga n bhai wrna last waala todo automatically waha rahega hi jo i ham nhi chahteh h for obvious reasons bhai ji 

}


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."

                value={todo}
                onChange={(e)=>{setTodo(e.target.value)}}
                

                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

