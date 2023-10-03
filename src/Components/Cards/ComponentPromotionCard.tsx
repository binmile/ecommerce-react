import { LeftArrowIcon, RightArrowIcon,PromotionCardImage } from "../../assets/Cards";


type PeromotionCardType = {
  title?: string;
  body?: string;
  color?: string;
  img?:string;
};

export const ComponentPromotionCard = ({
  body="Snap on a magnetic case, wallet, or both. And get faster wireless charging.",
  title="MAGSAFE",
  color="#F7DDD0",
  img=PromotionCardImage
}: PeromotionCardType) => {
  return (
    <div className="hidden px-[50px] xl:px-[90px] h-[221px] justify-center items-center gap-[70px]  lg:flex w-full text-[#465D6B]" style={{backgroundColor:color}}>
      <LeftArrowIcon/>
      <div className="flex flex-col">
        <h3 className="text-[24px]">{title}</h3>
        <p className="text-[20px]">{body}</p>
      </div>
      <img src={img} className="object-contain w-[350px] xl:w-[496px] h-full" />
      <RightArrowIcon/>
    </div>
  );
};
