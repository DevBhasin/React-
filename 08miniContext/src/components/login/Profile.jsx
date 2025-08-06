import React,{useContext} from 'react'
import Usercontext from '../../contexts/Usercontext'
function Profile() {

    const {user}=useContext(Usercontext)

    if( !user ||!user.userName || !user.password)return <div>Please Login</div>

 return <div>Welcome {user.userName}</div>

}

export default Profile
