import React  from 'react'
import { useContext } from 'react'
import {useState} from 'react'
import Usercontext from '../../contexts/Usercontext'
// function Login() {

// const [userName,setuserName]=useState('')

// const [notLoggedIn, SetnotLoggedIn]=useState(true)

// const [password,setPassword]=useState('')
           


// const handleSubmit=()=>{

//  SetnotLoggedIn(userName.trim()==='' || password.trim()==='')


// }

// return (
    
//     <>       {/* bhai jsx return ke andar ham keval expression shi likh sakte h iske andar jo ha statements like if else likhna allowed nhi hota ha  */}                 
    
//     <h2> Login </h2>


// < input type="text"  placeholder="username" value={userName} onChange={(e)=>{setuserName(e.target.value)}}  />{/*input tag u know bhai mere has no closing tag and it is the best practice for non-closing tag to make it self closing tag bhai it is more professional */}
// <>    </>
// < input type="text"  placeholder="password"  value={password}  onChange={(e)=>{setPassword(e.target.value)}} />


// <button onClick={handleSubmit}> Submit </button>

// {

//     notLoggedIn?<h2>Please Login</h2>: <h2>Welcome {userName}</h2>  //bhai yeh ternary operator ka use kiya ha maine yaha pr bhai mere badhiya ha jab tk kuch input nhi krenge tb tk likh kr aayega ki please login
// }

//          </>

// )}

function Login()
{

const [userName,setUserName]=useState("")
const [password,setPassword]=useState("")


const {setUser}=useContext(Usercontext)

const handleLogin=(e)=>{
             
e.preventDefault()//isliye likh rhe h yeh kyunki 

setUser({userName,password})

}







    return (
        <>
            <h2>Login</h2>
<input type="text" placeholder='username' value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
{ <span>   </span> }
<input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />

<button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login










