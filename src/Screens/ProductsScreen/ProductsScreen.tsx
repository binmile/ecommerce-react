import { useParams } from "react-router-dom";
import { ComponentCategoryMenu } from "../../Components/CategoryMenu/ComponentCategoryMenu";
import { ComponentFilterClothes } from "../../Components/Filters/ComponentFilterClothes";
import { useEffect, useState } from "react";
import { CardType } from "../../Components/Cards/type";
import { getProduct } from "../../Api/api";
import { ComponentItemCard } from "../../Components/Cards/ComponentItemCard";

export const ProductsScreen = () => {
  const { title } = useParams();
  const [data, setData] = useState<CardType[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    async function fetchApi() {
      const res: Record<string, string> = {};
      if (title != undefined) res.title = title;
      const product = await getProduct({ ...res, _limit: "40" });
      setData(await product.json());
    }
    fetchApi();
  }, [title]);
  const dropDown = [
    { text: "price low-to-high", value: "price_low" },
    { text: "price high-to-low", value: "price_high" },
    { text: "Most Rated", value: "rated" },
  ];
  const sortFunction = (value: string) => {
    switch (value) {
      case dropDown[0].value:
        setData([...data.sort((a, b) => a.cost! - b.cost!)]);
        break;
      case dropDown[1].value:
        setData([...data.sort((a, b) => b.cost! - a.cost!)]);
        break;
      case dropDown[2].value:
        setData([
          ...data.sort((a, b) => {
             const ar=  a.ratings!/a.count!;
             const br = b.ratings!/b.count!;
             return br-ar;
          }),
        ]);
        break;
    }
  };
  return (
    <div className="flex flex-col h-full w-full my-2 px-2 gap-2">
      <ComponentCategoryMenu
        itemCount={data.length}
        title={title ?? "All"}
        value={selectedValue}
        onChange={(value) => {
          setSelectedValue(value);
          sortFunction(value);
        }}
        dropdownItems={dropDown}
      />
      <div className="flex w-full h-full">
        <ComponentFilterClothes />
        <div className="flex flex-wrap gap-6 ml-10">
          {data.map((item) => (
            <ComponentItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
