import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    order:[]
}
export const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addOrder:(state,action)=> {
          const indexOfState= state.order.findIndex(obj=>obj.name === action.payload.name)
            if(indexOfState === -1){
                state.order.push(action.payload)
            }else{
                state.order[indexOfState] =action.payload
            }            
        }
    }
})

export const {addOrder} = cartSlice.actions
export default cartSlice.reducer