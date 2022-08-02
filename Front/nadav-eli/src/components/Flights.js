import axios from 'axios'
import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { selectFlights, setFlights } from '../slicers/FlightsSlice'
import { selectUser } from '../slicers/UserSlice'

export const Flights = () => {
    const flights = useSelector(selectFlights)
    const user = useSelector(selectUser)
    const dispatch= useDispatch()
    
useEffect(() => {
    async function getFlights(){
        let config = {headers:{'Content-Type':'application/json'}};
        axios.get('http://127.0.0.1:8000/getflights/',config).then((response)=>{
        console.log(response.data)
        dispatch(setFlights(response.data))
        })
    }
    if(flights.length===0){
    getFlights();}
    }, [flights])
  return (
    <div>
<table className='table table-bright table-striped'>
    <thead>
        <tr >
        <th>id</th>
        <th>from</th>
        <th>to</th>
        <th>tickets</th>
    </tr>
    </thead>
    <tbody>
{flights.map((flight , index)=>{
    return(
        <tr key={index}>
            <td>{flight.id}</td>
            <td>{flight.from}</td>
            <td>{flight.too}</td>
            <td>{flight.tickets}</td>
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
export default Flights