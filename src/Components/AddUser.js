import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FunctionAddUser } from '../Redux/Action'

const AddUser = () => {

    const [name, changeName] = useState('')
    const [email, emailChange] = useState('');
    const [phone, phoneChange] = useState('');
    const [role, roleChange] = useState('staff');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userobj = {name, email, phone, role};
        dispatch(FunctionAddUser(userobj))
        console.log(userobj)
        navigate('/user')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='card'>
                <div className='card-header' style={{textAlign:'left'}}>
                    <h2>Add user</h2>
                </div>
                <div className='card-body' style={{textAlign:'left'}}>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input 
                                    className='form-control'
                                    value={name}
                                    onChange={e => changeName(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>Email</label>
                                <input 
                                    className='form-control'
                                    value={email}
                                    onChange={e => emailChange(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input 
                                    className='form-control'
                                    value={phone}
                                    onChange={e => phoneChange(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>Role</label>
                                <select className='form-control' value={role} onChange={e => roleChange(e.target.value)}>
                                    <option value='admin'>Admin</option>
                                    <option value='staff'>Staff</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer' style={{textAlign:'left'}}>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <Link className='btn btn-danger' to={'/user'}>Back</Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddUser