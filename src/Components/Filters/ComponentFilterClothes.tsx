import { ComponentSearchBrand } from "./components/ComponentSearchBrand";


export const ComponentFilterClothes = () => {
  return (
    <div className="md:flex flex-col shrink-0 hidden md:w-[300px] h-full ">
      <h2 className="text-[32px] font-bold">Filter</h2>
     <ComponentSearchBrand/>
    </div>
  );
};
