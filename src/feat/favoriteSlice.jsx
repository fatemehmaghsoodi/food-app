import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState= {
    favorite:[]
}

export const favoriteSlice= createSlice({
    name:"favorite",
    initialState,
    reducers:{
        addFavorite:(state,action)=>{
            toast.success(`'${action.payload.name}' added to favorite list`);
            state.favorite.push(action.payload)
        },
        deleteFavorite:(state, action)=>{
            toast.error(`'${action.payload}' was removed`);
            const arrayOfIndex= state.favorite.findIndex(i=> i.name=== action.payload)
            state.favorite.splice(arrayOfIndex, 1)
        }
    }
})

export const {addFavorite, deleteFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer