import { createSlice } from "@reduxjs/toolkit";
import duck from '../Images/duck4.jpg'

export const Check = createSlice({
    name:"user",
    initialState:{
        online:true,
        setid:duck,
        click:true,
        usercheck:""
    },
    reducers:{
        on:(state,action) =>{
            state.online = action.payload;
        },
        set:(state,action) => {
            state.setid = action.payload;
        },
        click:(state,action) => {
            state.click=action.payload;
        },
        usercheck:(state,action) => {
            state.usercheck = action.payload
        }
    }
})
export const {on,set,click,usercheck} = Check.actions;
export default Check.reducer;
