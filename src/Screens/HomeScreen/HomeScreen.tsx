import { useEffect, useState } from "react";
import { ComponentBanner } from "../../Components/Banner/ComponentBanner";
import { ComponentCategoryCard } from "../../Components/Cards/ComponentCategoryCard";
import { ComponentItemCard } from "../../Components/Cards/ComponentItemCard";
import { ComponentItemDealOfTheDayCard } from "../../Components/Cards/ComponentItemDealOfTheDayCard";
import { ComponentItemTrendingCard } from "../../Components/Cards/ComponentItemTrendingCard";
import { ComponentPromotionCard } from "../../Components/Cards/ComponentPromotionCard";
import { ComponentTitleWithCardList } from "../../Components/Container/ComponentTitleWithCardList";
import { CardType, DealOfTheDay } from "../../Components/Cards/type";
import { getLimitedTimeOffer, getProduct } from "../../Api/api";

export const HomeScreen = () => {

  const [limitedTimeOffer,setLimitedTimeData] = useState<DealOfTheDay[]>([]);
  const [womenProduct,setWomenProduct] = useState<CardType[]>([]);
  const [menProduct,setMenProduct] = useState<CardType[]>([]);
  const [electronicProduct,setElectronicProduct] = useState<CardType[]>([]);
  const [shoeProduct,setShoeProduct] = useState<CardType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const limited = await getLimitedTimeOffer({_limit:"10"})
      const data = await limited.json();
      const womenProduct = await getProduct({title:"Women",_limit:"10"});
      const menProduct = await getProduct({title:"Men",_limit:"10"});
      const electroic = await getProduct({title:"Electronic",_limit:"10"});
      const shoes = await getProduct({title:"shoe",_limit:"10"});
      setShoeProduct(await shoes.json())
      setElectronicProduct(await electroic.json());
      setMenProduct(await menProduct.json());
      setWomenProduct(await womenProduct.json())
      setLimitedTimeData(data);
    }

    fetchData();
  }, []);
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex md:hidden flex-col justify-center items-center w-[100vw] gap-6 py-6 px-2">
        <ComponentCategoryCard />
        <ComponentCategoryCard />
      </div>
      <ComponentBanner />
      <ComponentTitleWithCardList title="Flash Sale" path="">
        {limitedTimeOffer.map((item) => (
          <ComponentItemDealOfTheDayCard key={item.product?.id} {...item} />
        ))}
      </ComponentTitleWithCardList>

      <ComponentTitleWithCardList title="Trending must-haves" path="/">
        {new Array(4).fill(1).map((_, idx) => (
          <ComponentItemTrendingCard key={idx} id={`${idx}`} />
        ))}
      </ComponentTitleWithCardList>

      <ComponentTitleWithCardList title="Top Women Dresses" path="Women">
        {womenProduct.map((item) => (
          <ComponentItemCard key={item.id} {...item} />
        ))}
      </ComponentTitleWithCardList>

      <ComponentTitleWithCardList title="Top  Men Dresses" path="Men">
        {menProduct.map((item) => (
          <ComponentItemCard key={item.id} {...item} />
        ))}
      </ComponentTitleWithCardList>
      <ComponentTitleWithCardList title="Top  Electronic Gadget" path="Electronic">
        {electronicProduct.map((item) => (
          <ComponentItemCard key={item.id} {...item} />
        ))}
      </ComponentTitleWithCardList>
      <ComponentTitleWithCardList title="Top  shoe " path="shoe">
        {shoeProduct.map((item) => (
          <ComponentItemCard key={item.id} {...item} />
        ))}
      </ComponentTitleWithCardList>
      <div className="hidden lg:flex  ld:flex-row justify-center items-center w-[100vw] gap-6 py-6">
        <ComponentCategoryCard />
        <ComponentCategoryCard />
      </div>

      <ComponentPromotionCard />

      <div className="hidden lg:flex  ld:flex-row justify-center items-center w-[100vw] gap-6 py-6">
        <ComponentCategoryCard />
        <ComponentCategoryCard />
      </div>
    </div>
  );
};
