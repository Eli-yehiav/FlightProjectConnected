import {configureStore} from '@reduxjs/toolkit'
import UserReducer  from './UserSlice';
import FlightsReducer from './FlightsSlice'
import { admin } from '../components/AdminPage';
export const store = configureStore({
    reducer:{
         user:UserReducer,
         flights:FlightsReducer,
        //  admin:admin
    }
})