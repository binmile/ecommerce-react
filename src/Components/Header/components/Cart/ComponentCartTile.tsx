import { useDispatch } from "react-redux";
import { ComponentCounter } from "./ComponentCounter";
import { decrement, increment, setCartValue } from "../../../../Feature/Cart/cartSlice";

type cartTileType = {
     title? : string,
     url?:string,
     cost?:number
     haveDivider : boolean,
     productId?:string,
     quantity?:number
}
export const ComponentCartTile = ({cost=33,title="Short Mango Top",url,haveDivider=false,productId,quantity}:cartTileType) => {
  const dispatch = useDispatch();
  return (
    <div className={`flex gap-2 p-2 py-4 justify-between ${haveDivider && "border-b-2 border-solid text-secondary "}`}>
       <img src={url} className="w-[32px] object-contain" />
       <div className="flex flex-col text-secondary ">
        <h3>{title}</h3>
        <span>${Math.floor(cost)}</span>
       </div>
       <ComponentCounter data={quantity} onChange={(value)=>{dispatch(setCartValue({productId:productId,quantity:value}))}} decrement={()=>dispatch(decrement(productId))} increment={()=>dispatch(increment(productId))}/>

    </div>
  )
}
