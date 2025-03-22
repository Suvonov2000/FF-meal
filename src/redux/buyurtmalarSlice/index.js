import { createSlice } from "@reduxjs/toolkit";

const buyurtmalarSlice = createSlice({
    name: "buyurtmalar",
    initialState:{
        category:"yangi",
        menu:"menu-h",
    },
    reducers:{
        setCategory: (state, action) =>{
            state.category = action.payload;
        },
        setMenu: (state, action)=>{
            state.menu = action.payload;
        }
    }
});

export const {setCategory, setMenu} =  buyurtmalarSlice.actions;
export default buyurtmalarSlice.reducer;