import React from 'react'

const UserList = () => {
  return (
    <div>
        <div className='card'>
            <div className='card-header'>
                <h2>User Listing</h2>
            </div>
            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Role</td>
                        <td>Action</td>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )
}

export default UserList