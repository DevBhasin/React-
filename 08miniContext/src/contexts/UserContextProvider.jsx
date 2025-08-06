import React,{useState} from 'react'
import Usercontext from './Usercontext'
function UserContextProvider({children}) {
    
    
        const [user,setUser] =useState(null)
    
    
    
    return (

        <>
        <Usercontext.Provider value={{user,setUser}} >{/* value ke andar object isliye de rhe jisse jo bhi ham as a prop chahte vo sab object ke form mein de rhe h jisse jis bhi component ko jo bhi prop use krna h vo use kr sake  */}

{children}

</Usercontext.Provider>
        </>
    )
}

export default UserContextProvider
