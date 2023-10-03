import { CategoryCardImage } from "../../assets/Cards";

type SeasonalCategoryCard = {
    title? : string,
    body? : string,
    img?:string,
    onPress? : ()=>void
}

export const ComponentCategoryCard = ({
  img=CategoryCardImage,
  body="Throwback Shirts & all-day dressed",
  title="Never-Ending Summer",
  onPress=()=>{}
}:SeasonalCategoryCard ) => {
  return (
    <div className="flex w-[300px] h-[280px] sm:w-[400px] lg:w-[450px] lg:h-[380px] xl:w-[550px] shrink-0 overflow-clip">
      <div className="flex justify-evenly items-center px-[20px] py-[32px] gap-2 bg-[#BF2E3B] text-white lg:py-[68px] flex-col flex-1">
        <h3 className="text-[24px] xl:text-[32px] font-bold">{title}</h3>
        <p className="text-[18px] xl:text-[28px]">{body}</p>
        <a  className="underline self-start cursor-pointer" onClick={onPress}>Explore all category</a>
      </div>
      <img src={img} className="w-[60%] object-cover object-top" />

    </div>
  );
};
