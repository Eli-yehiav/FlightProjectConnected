import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { selectFlights, setFlights } from '../slicers/FlightsSlice'
import { selectUser, setUser } from '../slicers/UserSlice'

const Home = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch() 
    const flights = useSelector(selectFlights)
  
  return (
    <>
    <div  >
    <Link to='/' className='btn btn-primary'>Home</Link>
    <Link to='flights' className='btn btn-primary'>FLIGHTS</Link>
    <Link to='adminpage' className='btn btn-success'>adminpage</Link>

{user ? (
    <>
    <button onClick={()=>dispatch(setUser(null))} className='btn btn-danger'>LOGOUT</button>
    <button className='btn btn-info'>{user.username}</button> 
    </>
):(
    <>
    <Link to='login' className='btn btn-success'>LOGIN</Link>
    <Link to='register' className='btn btn-success'>REGISTER</Link>
    
    </>
)}

    
    </div>
    <Outlet/>
    </>
  )
}

export default Home

// style={{position:'absolute',top:'45%',left:'45%'}}