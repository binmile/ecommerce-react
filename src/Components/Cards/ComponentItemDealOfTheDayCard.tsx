import { Bag } from "../../assets/Cards";
import {  DealOfTheDay } from "./type";
import { ComponentPriceTile } from "./Components/ComponentPriceTile";
import { ComponentRatingTile } from "./Components/ComponentRatingTile";
import { ComponentTimerTile } from "./Components/ComponentTimerTile";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";

export const ComponentItemDealOfTheDayCard = ({
  offerEndTime = "9/23/2023",
  product = {
    title: "Shoulder bag-White-Plain",
    brand: "Tonny Black",
    cost: 100,
    discount: 25,
    ratings: 100,
    img: Bag,
    count: 25,
    id: ""
  },
}: DealOfTheDay) => {
  const navigator = useNavigate();
  return (
    <Card className="flex flex-col min-w-[250px] my-2 items-center shadow-md p-4 rounded-md">
      <span className="text-light-tritary-text text-[14px] font-bold">
        Deal of the Day
      </span>
     <ComponentTimerTile time={offerEndTime} />

      <div className="flex w-[241px] h-[129px]">
        <img src={product.img} className="w-full object-contain" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[16px] cursor-pointer" onClick={()=>navigator("product/"+product.id)}>{product.brand}</h3>
        <p className="text-[12px] text-secondary">{product.title}</p>
        <ComponentRatingTile count={product.count} rating={product.ratings} />
        <ComponentPriceTile
          cost={product.cost}
          discount={product.discount}
          primary={true}
        />
      </div>
    </Card>
  );
};
