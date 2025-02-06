import React, {useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        mobile:'',
        password:''
    })

    const navigate = useNavigate()

    const readInput = async (e) => {
        const { name , value } =e.target
        setUser({...user,[name]:value})
    }
    const submitHandler = async (e) => {
        e.preventDefault() 
            try {
               // console.log(`new user =`, user)

                await axios.post('/api/auth/register', user)
                .then(res => {
                    toast.success(res.data.msg)
                    navigate('/login')
                }). catch (err => toast.error(err.response.data.msg))
            }
        catch (err) {
            console.log(err.message)
        }
    }
  return (
    <section className='form-area'>
    <div className='container pt-5'>
        <div className='row mt-5'>
            <div className='col-md-12 text-center'>
                <h1 className='display-6 text-secondary'>Are You New To Foody ? </h1>
            </div>
        </div>

        <div className='row mt-4'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <form method='post' onSubmit={submitHandler}>
                            <div calssname="form-group mt-2">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name='name' id='name' value={user.name} onChange={readInput} className='form-control' required />
                            </div>
                            <div calssname="form-group mt-2">
                                <label htmlFor="email">Your email</label>
                                <input type="email" name='email' id='email' value={user.email} onChange={readInput} className='form-control' required />
                            </div>
                            <div calssname="form-group mt-2">
                                <label htmlFor="mobile">Your Mobile</label>
                                <input type="number" name='mobile' id='mobile' value={user.mobile} onChange={readInput} className='form-control' required />
                            </div>
                            <div calssname="form-group mt-2">
                                <label htmlFor="password">Your Password</label>
                                <input type="text" name='password' id='password' value={user.password} onChange={readInput} className='form-control' required />
                            </div>
                            <div className='form-group mt-3'>
                                <button type='submit' className='btn btn-success'><i className='bi bi-person-add'></i>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div>
</section>
  )
}

export default Register
