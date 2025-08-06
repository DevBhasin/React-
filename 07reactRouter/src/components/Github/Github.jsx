import React from 'react'
import {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

const data= useLoaderData()

// const [data,setData]=useState([])


//     useEffect(()=>{
//         fetch('https://api.github.com/users/DevBhasin')
//         .then(response=>response.json())
//         .then(data=>{console.log(data)
        
//         setData(data)
//         }
//     )
//     },[])
    


    return (
        <>

        <div className='bg-gray-600 m-4 text-center text-white p-4 text-3xl'>

            Github Followers : {data.followers}
            <img  className="mx-145 m-2" src={data.avatar_url} alt="git picture"  width={300}/>
            </div>
            
        </>
    )
}

export default Github//jo default function hote h vo bina curly braces ke hi export ho jaate h lein jo named function hote h vo export and import curly braces ke saath hi hote h bhai mere

export const githubInfoLoader=async ()=>{
  const response =await  fetch('https://api.github.com/users/DevBhasin')//await ka isliye use ho rha h kyunki bhai mere ham yaha wait krna chah rhe h jab tk ki data jo hamein chahiye chahe vo database se aa rha ho ye fir API se vo aa nhi jaata 
  //aur agr wait nhi krenge bhai mere to kya hoga u know n bc response jo hamne variable bnaaya h usmein kuch store hi nhi ho rha hoga bhai mere samjah rhe ho n kyunki jab ttk response n chal jaaye promise ka tb tk wait krne ke liye bol rhe h hm before storing anything in the variable bhai mere 
  return response.json()
  
  //async function isliye bnaate h jab hamein keval promise chahiye hota ha aur bhai await keval async function ke andar hi ham use kr  sakte h wrna nhi kr sakte h bhai ji 
}
