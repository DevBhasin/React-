import { createSlice,nanoid} from "@reduxjs/toolkit";

// Slice ek object hai jo Redux ke teen cheezein ek saath define karta hai:

// State (data ka part jo tum manage karna chahte ho)

// Reducers (functions jo state ko modify karte hain)

// Actions (jo automatically reducers ke liye ban jaate hain)




//direct export default keval functions ko hi kr sakte h vo bhi bhai function expression ko function definition ko nhi mtlb jaha const krke kisi ek variable mein koi cheej bhale hi function kyun n store ho rha ho usse ham ek hi line mein export deafultnhi kr sakte h bhai mere normal kisi variable ko direct export default nhi kr sakte ha ek hi line mein bhai samajh rhe ho n bhai ji 





//but bhai mere  in case of redux Toolkit hamein bhai mere functionality bhi vhi define krni padhti h jaha ham functions banaa rhe hote h unlike the context API bhai


const initialState={  //initialState is kind of bhai default value jo ham context bnaate hue kr rhe hote the 



    todos:[]//array of objects hoga yeh



}


export const todoSlice=createSlice(
    {
         name:'todo',
         initialState,
         reducers:{          //reducers ke andar hi bhai state updation ka kaam hota ha 

addTodo:(state,action)=>{
    const todo={
        id:nanoid(),
        text:action.payload
    }

    state.todos.push(todo)
},
removeTodo:(state,action)=>{     //this is the syntax of bhai mere state updation functions bhai 
           
    state.todos=state.todos.filter((todo)=>(todo.id!==action.payload))
         }

         

}    

    }
)


export const  {addTodo,removeTodo} =todoSlice.actions

export default todoSlice.reducer 