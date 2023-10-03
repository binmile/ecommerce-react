import { Card } from "@mui/material"
import { MostPurchasedCardImage } from "../../assets/Cards"
import { ComponentPriceTile } from "./Components/ComponentPriceTile"
import { ComponentRatingTile } from "./Components/ComponentRatingTile"
import { CardType } from "./type"

export const ComponentMostPurchasedCard = ({
  img=MostPurchasedCardImage,
  brand="Fujifilm instax mini 9 camera",
  ratings=100,
  count=30,
  cost=150,
  discount=33
}:CardType) => {
    
  return (
    <Card className="flex p-[28px] w-[271px] shadow-md  flex-col">
      <img src={img} className="w-full object-cover h-[232px]"  />
      <div className="flex flex-col">
      <h3 className="text-[16px] font-[600] ">{brand}</h3>
      <ComponentRatingTile rating={ratings} count={count}/>
      <ComponentPriceTile cost={cost} discount={discount}/>
      </div>
    </Card>
  )
}
