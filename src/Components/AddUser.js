import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const AddUser = () => {

    const [name, changeName] = useState('')
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [role, rolechange] = useState('staff');
    const dispatch=useDispatch();
    const navigate=useNavigate();

  return (
    <div className='card'>
        <div className='card-header' style={{textAlign:'left'}}>
            <h2>Add user</h2>
        </div>
        <div className='card-body' style={{textAlign:'left'}}>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>Name</label>
                        <input className='form-control'></input>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control'></input>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input className='form-control'></input>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='form-group'>
                        <label>Role</label>
                        <select className='form-control'>
                            <option value='admin'>Admin</option>
                            <option value='staff'>Staff</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-footer' style={{textAlign:'left'}}>
            <button type='button' className='btn btn-primary'>Submit</button>
            <Link className='btn btn-danger' to={'/user'}>Back</Link>
        </div>
    </div>
  )
}

export default AddUser