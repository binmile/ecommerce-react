import { TrendingCardImage } from "../../assets/Cards"
import { ComponentShopNow } from "../Buttons/ComponentShopNow"
import { CardType } from "./type"


export const ComponentItemTrendingCard = ({
    img=TrendingCardImage,
    brand="Cool & Sexy Calvin Klein",
    title="Belt-Brown-Casual",
    cost=100
}:CardType) => {
  return (
    <div className="w-[350px] sm:w-[450px] shadow-md  md:w-[621px] shrink-0 rounded-lg overflow-clip">
        <img src={img} className="h-[344px] w-full object-top object-cover text-white" />
        <div className="inline-flex w-full p-[20px] bg-black justify-between">
            <div className="flex flex-col">
                <h3 className="text-dark-secondary font-bold text-[16px]">{brand}</h3>
                <p className="text-[14px] text-dark-secondary">{title}</p>
            </div>
            <ComponentShopNow price={cost}/>
        </div>
    </div>
  )
}
