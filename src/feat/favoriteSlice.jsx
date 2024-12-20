import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    favorite:[]
}

export const favoriteSlice= createSlice({
    name:"favorite",
    initialState,
    reducers:{
        addFavorite:(state,action)=>{
            state.favorite.push(action.payload)
        },
        deleteFavorite:(state, action)=>{
            const arrayOfIndex= state.favorite.findIndex(i=> i.name=== action.payload)
            state.favorite.splice(arrayOfIndex, 1)
        }
    }
})

export const {addFavorite, deleteFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer