import { ItemCardImage } from "../../assets/Cards";
import { CardType } from "./type";
import { ComponentPriceTile } from "./Components/ComponentPriceTile";
import { ComponentRatingTile } from "./Components/ComponentRatingTile";
import { Card, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App/store";
import { add, remove } from "../../Feature/Favorite/favoriteSlice";
import { useNavigate } from "react-router-dom";
export const ComponentItemCard = ({
  title = "Kimono & Caftan - Black - Regular fit",
  brand = "Mango",
  cost = 100,
  discount = 30,
  img = ItemCardImage,
  ratings = 100,
  count = 25,
  id
}: CardType) => {
  const data= useSelector((state:RootState)=>state.favorite);

  const isAdded = data[id]!==undefined;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const toggled = ()=>{
    console.log(id);
      isAdded?dispatch(remove(id)):dispatch(add({key:id,data:{id:id,title:title,price:cost,url:img}}));
  } 
  return (
    <Card className="flex shrink-0  flex-col w-[260px] rounded-md overflow-clip">
      <img src={img} className="w-full  object-cover object-top" />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="text-[16px] cursor-pointer" onClick={()=>navigator("/product/"+id)}>{brand}</h3>
            <p className="text-[12px] text-secondary">{title}</p>
          </div>
          <IconButton onClick={toggled}><Favorite color={isAdded?"error":"disabled"}/></IconButton>
        </div>
        <ComponentRatingTile rating={ratings} count={count} />
        <ComponentPriceTile cost={cost} discount={discount}/>
      </div>
    </Card>
  );
};
