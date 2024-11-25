import React from 'react'
import { useAuth } from '../../context/authContext'

const Navbar = () => {
  const {user} = useAuth()
  return (
    <div className='flex items-center text-white justify-between h-12 bg-red-600 px-5'>
      <img src="https://play-lh.googleusercontent.com/Im3CE-kmZJmZMC8pkhpCj7tGznPI6LC1EjhaTJ3E6Cdh_mgW5VxF_joZK31XWwZPmkT5" alt="logo" height="45" width="45" />
         <h3>Welcome to admin panel</h3>
         <button className='px-4 py-1 bg-red-800 hover:bg-blue-800'>Logout</button>
    </div>
  )
}

export default Navbar
