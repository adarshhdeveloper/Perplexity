import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useChat } from '../chat/hooks/useChat'
import { useAuth } from '../auth/hooks/useAuth'



const Dashboard = () => {

    const auth = useAuth()
    const chat = useChat()
    const { user } = useSelector(state => state.auth)
    console.log(user)
    useEffect(()=>{
      chat.initializeSocketConnection()
    },[])

  return (
    <div>
      Dashboard 
      <br></br>
      user : {user.username}

      <br>
      </br>
      <button  className="px-4 py-2 bg-danger bg-amber-300  rounded hover:bg-danger-dark" onClick={auth.handleLogout}>
        Logout
      </button>

    </div>
  )
}

export default Dashboard
