import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

function PrivateRoute(props) {
    const context = useAuth()
    return (
        <React.Fragment>
            {
                context.isLogin && context.token ? <Outlet/> : <Navigate to='/login' />
            }
        </React.Fragment>
    )
}

export default PrivateRoute
