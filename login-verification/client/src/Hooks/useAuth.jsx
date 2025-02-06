import React , { useContext} from 'react'
import { AuthContext } from '../Context/authProvider'

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export default useAuth