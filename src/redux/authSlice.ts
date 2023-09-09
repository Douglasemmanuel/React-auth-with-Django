import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false
}
export const authslice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth:(state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {setAuth} = authslice.actions;

export default authslice.reducer;