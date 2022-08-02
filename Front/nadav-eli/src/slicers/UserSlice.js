import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:null,
}
export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.value = action.payload
        },
        
    }
})

export const {setUser} = UserSlice.actions;
export const selectUser = (state)=>state.user.value;
export default UserSlice.reducer;