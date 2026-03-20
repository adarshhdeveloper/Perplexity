import { useDispatch } from "react-redux";
import { register,login,getMe , logout } from "../service/auth.api";
import { setLoading , setError, setUser } from "../auth.slice";

export function useAuth(){
    const dispatch = useDispatch()

    async function handleRegister({email , username , password }) {
         try{
            dispatch(setLoading(true))
            const data = await register({email , username , password})
         }catch(error){
            dispatch(setError(error.response?.data?.message || "Registration failed"))
            throw error  
        }finally{
            dispatch(setLoading(false))
         }
    }

    async function handleLogin({email , password}) {
        try{
            dispatch(setLoading(true))
            const data = await login({email , password})
            dispatch(setUser(data.user))
        }catch(error){
            dispatch(setError(error.response?.data?.message || "Login failed"))
            throw error  
        }finally{
            dispatch(setLoading(false))
        }  
    }

    async function handleLogout() {
        try{
            dispatch(setLoading(true))
            const data = await logout()
            dispatch(setUser(null))
        }catch(error){
            dispatch(setError(error.response?.data?.message || "Logout failed"))
            throw error
        }finally{
            dispatch(setLoading(false))
        }
    }

    async function handleGetMe() {
        try{
            dispatch(setLoading(true))
            const data = await getMe()
            dispatch(setUser(data.user))
        }catch(error){
            dispatch(setError(error.response?.data?.message  ||"Failed to fetch user details "))
            throw error
        }finally{
            dispatch(setLoading(false))
        }
    }

    return{
        handleRegister,
        handleLogin,
        handleGetMe,
        handleLogout
    }
}