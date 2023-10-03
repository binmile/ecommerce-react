import { PayloadAction, createSlice } from "@reduxjs/toolkit";



type FavoriteType = {
    id:string
    title : string,
    price: number,
    url:string
}
type PayloadActionType = {
   key: string,
   data: FavoriteType
}

const initialData : Record<string, FavoriteType>= {};
export const favoriteSlice = createSlice({
    name:"favorite",
    initialState:initialData,
    reducers:{
       add(state,action:PayloadAction<PayloadActionType>){
           state[action.payload.key]=action.payload.data;
       },
       remove(state,action:PayloadAction<string>){
         delete  state[action.payload];
     }
    }
})

export const {add,remove} = favoriteSlice.actions;

export default favoriteSlice.reducer;