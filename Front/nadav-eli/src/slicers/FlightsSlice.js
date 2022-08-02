import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:[],
}
export const FlightsSlice = createSlice({
    name:'flights',
    initialState,
    reducers:{
        setFlights:(state,action)=>{
            state.value = action.payload
        },
        
    }
})

export const {setFlights} = FlightsSlice.actions;
export const selectFlights = (state)=>state.flights.value;
export default FlightsSlice.reducer;