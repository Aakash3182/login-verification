import React from 'react'
import useAuth from '../../Hooks/useAuth'

function Profile() {
    const context = useAuth()
    const user = context?.user

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
            <h6 className='text-success display-6'>User Profile</h6>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <div className='card'>
                <div className='card-heading'>
                    <h5 className='text-success card-title'>
                        User Information
                    </h5>
                </div>
                <div className='card-body'>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <strong>Name</strong>
                            <span className='float-end'> {user?.name}</span>
                        </li>
                        <li className='list-group-item'>
                            <strong>Email</strong>
                            <span className='float-end'> {user?.email}</span>
                        </li>
                        <li className='list-group-item'>
                            <strong>Mobile</strong>
                            <span className='float-end'> {user?.mobile}</span>
                        </li>
                        <li className='list-group-item'>
                            <strong>Role</strong>
                            <span className='float-end'> {user?.role}</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
