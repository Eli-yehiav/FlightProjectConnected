import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUser } from '../slicers/UserSlice'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const nav = useNavigate()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const getLogin=async()=>{
        let config = {headers:{'Content-Type':'application/json'}};
        let data = JSON.stringify({
            username:Username,
            password:Password
        })
        axios.post('http://127.0.0.1:8000/login/',data,config).then((response)=>{
            if(response.status===200){
                localStorage.setItem('token',response.data.access)
                let afterToken = jwt_decode(response.data.access)
                dispatch(setUser({username:afterToken.username,id:afterToken.user_id}))
                nav('/')
            }else{
                alert('NOT IN SYSTEM!')
            }
        });
            
};
  return (
    <div>
        <h1 >LOGIN</h1>
        <div style={{position:'absolute',top:'45%'}}>
      <input type='text' placeholder='Username' onChange={(eli)=>setUsername(eli.target.value)}/>
      <input type='text' placeholder='Password'  onChange={(eli)=>setPassword(eli.target.value)}/>
      <br/>
      <button className='btn btn-outline-success' onClick={()=>getLogin()}>LOGIN</button>
      </div>
    </div>
  )
}

export default Login