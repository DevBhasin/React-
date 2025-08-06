import React from 'react'
import {useParams} from 'react-router-dom'
function User() {

const {userid}=useParams()//yeh useParams kind of cutom hook hi hota h yeh samjh lo kyunki isko bhi waise hi use kr rhe ha bhai mere 
 //hota kya ha jo bhi bhai mere return krta h n cutom hook usko hamesha ham jo hai aise hi curly braces mein store kr rhe hote h bhai 
 //yaha pr userid isliye h kyunki jo hamne  main.jsx mein path diya ha usmein bhai /: iske baad jo variable use krenge vhi yaha automatically aa jaata h  usko useParams ka use krke store krte h bhai aur fir use krte h                     

    return (
        <><div className='bg-gray-600 text-white text-3xl p-4 text-center'>User {userid}</div> </>
    )
}

export default User
