import { Button } from "@mui/material";
import { ComponentCartTile } from "./ComponentCartTile";
import { useSelector } from "react-redux";
import { RootState } from "../../../../App/store";
import { useNavigate } from "react-router-dom";

export const ComponentMiniCart = () => {
  const cartItems = useSelector((state:RootState)=>state.cart);
  const cartListItem = Array.from(Object.keys(cartItems).map(item=>cartItems[item]));
  let total:number =0;
  const navigation = useNavigate();
  cartListItem.forEach(({product,quantity})=> total+= product.cost!*quantity)
  if (cartListItem.length === 0)
    return (
      <div className="flex w-full flex-col text-secondary gap-4 items-center text-center">
        Your basket is empty. Check out our fashion website to add your fashion
        trends to the basket
        <button className="text-white bg-blue-700 px-[32px] py-[8px]">Discover Whats Is New</button>
      </div>
    );   
  return (<div className="flex w-full text-secondary flex-col gap-3">
       {cartListItem.map((item,idx)=><ComponentCartTile quantity={item.quantity} productId={item.product.id} haveDivider={idx !== cartListItem.length-1} key={item.product.id} cost={item.product.cost} title={item.product.title} url={item.product.img}/>)}
       <div className="flex">
        <span>Total : <b>${Math.floor(total)}</b> </span>
       </div>
       <div className="flex justify-between">
        <Button variant="contained" onClick={()=>navigation('/cart')}> View Bag</Button>
        <Button variant="outlined">Checkout</Button>
       </div>
  </div>);
};
