import React, {createContext,useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

// context
export const AuthContext = createContext()

//context provider component
function AuthProvider(props) {
    // handle login status
    const [isLogin, setIsLogin] = useState(false)
    // store the token
    const [token,setToken] = useState(
      sessionStorage.getItem("token") ? sessionStorage.getItem("token") : false
    )
    // user info   
    const [user,setUser] = useState(false)

    const navigate = useNavigate()

    // verify user
    const verifyUser = async () => {
      await axios.get('/api/auth/verify/user', {
        headers: {
          Authorization: token
        }
        }).then(res => {
          toast.success(res.data.msg)
         // console.log(`verify response =`, res.data)
          setIsLogin(true)
          setUser(res.data.user)
          if (res.data.user.role === "admin") {
            navigate(`/admin/dashboard`)
          } else if (res.data.user.role === "user" ) {
            navigate(`user/dashboard`)
          }

        }).catch(err => toast.error(err.response.data.msg))
      }
      useEffect(() => {
        if (token) {
          verifyUser()
        }
      },[token])
    
      
  return (
    <AuthContext.Provider value ={{token , setToken , user , setUser , isLogin , setIsLogin, verifyUser}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
