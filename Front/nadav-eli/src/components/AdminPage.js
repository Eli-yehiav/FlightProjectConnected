import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../slicers/UserSlice'

export const AdminPage = () => {
    const user = useSelector(selectUser)
    const [allusers, setallusers] = useState([])
   
useEffect(() => {
    async function getallusers(){
        let token = localStorage.getItem('token')
        let config = {headers:{'Content-Type':'application/json',Authorization:'Bearer '+String(token)}};
        axios.get('http://127.0.0.1:8000/users/',config).then((response)=>{
        console.log(response.data)
        setallusers(response.data)
        })
    }
    if(allusers.length===0){
        getallusers();}
    }, [allusers])
    console.log(allusers)
  return (
    <div>
<table className='table table-bright table-striped'>
    <thead>
        <tr >
        <th>username</th>
        <th>is staff</th>
        <th>email</th>
        <th>first_name</th>
    </tr>
    </thead>
    <tbody>
{allusers.map((u , index)=>{
    return(
        <tr key={index}>
            <td>{u.username}</td>
            <td>{String(u.is_staff)}</td>
            <td>{u.email}</td>
            <td>{u.first_name}</td>
            {user ? (
                <td><button className='btn btn-danger'>Delete</button></td>
            ):('')}
        </tr>
    )
})


}

    </tbody>
</table>









    </div>
  )
}
export default AdminPage