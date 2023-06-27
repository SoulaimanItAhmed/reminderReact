import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : 'user',
    initialState : {
        items :[]
    },
    reducers: {
        addUser: (state, action) => {
           state.items.push(action.payload)
        },
        deleteUser:(state, action)=>{
            const newItems = state.items.filter(item=> item.id !== action.payload);
            return {...state, items:newItems};
        }
    },
})
export const { addUser, deleteUser} = userSlice.actions
export default userSlice.reducer