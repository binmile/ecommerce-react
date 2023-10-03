import { createSlice } from "@reduxjs/toolkit";
import { CardType } from "../../Components/Cards/type";


type cartItemType = {
  product:CardType,
  quantity:number
}



// eslint-disable-next-line @typescript-eslint/ban-types
const initialState:Record<string,cartItemType> = {  
} ;


export const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,
    reducers:{
        increment(state,action){
            const cardId = action.payload;
            const item =( state[cardId]! as cartItemType);
            item.quantity+=1;
            state[cardId]=item;
        },
        decrement(state,action){
            const cardId = action.payload;
            const item =( state[cardId]! as cartItemType);
            item.quantity--;
            if(item.quantity===0) delete state[cardId];
            else state[cardId]=item;
        },
        setCartValue(state,action){
            const cardId = action.payload.productId;
            const item = state[cardId] as cartItemType;
            item.quantity = action.payload.quantity;
            if(item.quantity===0) delete state[cardId];
            else state[cardId]=item;
        },
        removeItem(state,action){
            const cardId = action.payload;
            delete state[cardId];
        },   
        addItemToCart(state,action){
            state[action.payload.id]={product:action.payload.product,quantity:1};
        }  
    }
    
});

export const {decrement,increment,removeItem,addItemToCart,setCartValue} = cartSlice.actions;
export default cartSlice.reducer;