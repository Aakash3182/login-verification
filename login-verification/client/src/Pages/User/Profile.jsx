import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { toast} from 'react-toastify'
import axios from 'axios';

function Profile() {
  const context = useAuth();
  const user = context?.user;
  const no_profile_img = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const [profile,setProfile] = useState({
    name: context?.user.name,
    email: context?.user.email,
    mobile: context?.user.mobile,
    address: context?.user.address
  })

  const readData = (e) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

const submitHandler = async (e) => {
    e.preventDefault()
    try{
        console.log(`profile =`, profile)
        await axios.patch(`api/user/update/profile`,profile, {
            headers: {
                Authorization: context?.token
            }

        }).then(res => {
            toast.success(res.data.message)
            context?.verifyUser()
        }).catch(err => {
            toast.error(err.response.data.message)
        })
    } catch (err) {
        toast.warning(err.message)
    }
}
  
  return (
    <div className='container mt-5'>
      <div className='row p-5'>
        <div className='col-md-12 text-center'>
          <h6 className='text-success display-6'>User Profile</h6>
        </div>
      </div>

      <div className='row pb-5'>
        <div className='col-md-4 mt-2 mb-2'>
          <div className='card'>
            <img src={user?.image || no_profile_img} alt="no user image" className='card-img-top' />
            <div className='card-body text-center'>
              <h4 className='text-secondary text-capitalize'>{user?.name}</h4>
            </div>
          </div>
        </div>

        <div className='col-md-8'>
          <div className='card border-0'>
            <div className='card-header d-flex justify-content-between'>
              <h5 className='text-success card-title'>User Information</h5>
              <button data-bs-toggle='modal' data-bs-target='#profileForm' className='btn btn-outline-info'>
                <i className='bi bi-pencil'></i>
              </button>
            </div>
            <div className='card-body'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <strong>Name</strong>
                  <span className='float-end'>{user?.name}</span>
                </li>
                <li className='list-group-item'>
                  <strong>Email</strong>
                  <span className='float-end'>{user?.email}</span>
                </li>
                <li className='list-group-item'>
                  <strong>Mobile</strong>
                  <span className='float-end'>{user?.mobile}</span>
                </li>
                <li className='list-group-item'>
                  <strong>Role</strong>
                  <span className='float-end'>{user?.role || "No role found"}</span>
                </li>
              </ul>

              <ul className='list-group mt-4'>
                <li className='list-group-item'>
                  <strong>Shipping Address & Billing Address</strong>
                  <span className='float-end'>{user?.address || "No address found"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* popup form */}
      <div className='modal fade' id='profileForm'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='text-secondary modal-title'>Update Profile</h4>
                    <button data-bs-dismiss='modal' className='btn-close'></button>
                </div>
                <div className='modal-body'>
                    <form onSubmit={submitHandler}>
                        <div className='form-group mt-2'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' className='form-control' value={profile.name} onChange={readData} required/>
                        </div>
                        <div className='form-group mt-2'>
                            <label htmlFor='email'>Name</label>
                            <input type='email'  id='email' className='form-control' value={profile.email} onChange={readData} required/>
                        </div>
                        <div className='form-group mt-2'>
                            <label htmlFor='mobile'>Name</label>
                            <input type='number'  id='mobile' className='form-control' value={profile.mobile} onChange={readData} required/>
                        </div>
                        <div className='form-group mt-2'>
                            <label htmlFor='address'>Address</label>
                           <textarea name='address' id='address' col={30} row={5} className='form-control' value={profile.address} onChange={readData} required />
                        </div>
                        <div className='form-group mt-2'>
                            <label htmlFor='pic'>Profile picture</label>
                            <input type='file' name='pic' id='pic' className='form-control' />
                        </div>
                        <div className='form-group mt-2'>
                           <input type='submit' value='Update' className='btn btn-success'/>
                        </div>
                    </form>
                </div>
                <div className='modal-footer'></div>
            </div>
        </div>
      </div>


    </div>
  );
}

export default Profile;
