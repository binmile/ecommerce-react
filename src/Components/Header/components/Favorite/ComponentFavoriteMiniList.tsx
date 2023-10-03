import { useDispatch, useSelector } from "react-redux";
import { ComponentFavoriteTile } from "./ComponentFavoriteTile";
import { RootState } from "../../../../App/store";
import { remove } from "../../../../Feature/Favorite/favoriteSlice";

export const ComponentFavoriteMiniList = () => {
    const favoriteList = useSelector((state : RootState)=>state.favorite);
    const favoriteArray=Array.from(Object.keys(favoriteList).map(item=>favoriteList[item]))
    
    const dispatch = useDispatch();
    if(favoriteArray.length === 0) return (
        <div className="flex w-full p-5 text-secondary">
            Your Favorite List is Empty
        </div>
    );
  return (
    <div className="flex flex-col gap-2">
        {favoriteArray.map((item,idx)=><ComponentFavoriteTile title={item.title} url={item.url} cost={item.price} remove={()=>{
             dispatch(remove(item.id))
        }} itemId={item.id} haveDivider={idx<favoriteArray.length-1} key={item.id} />)}
    </div>
  )
}
