import { ShopNowIcon } from "../../assets/Button/ShopNowIcon";
import { ButtonType, ButtonVariant } from "./type.d";

export const ComponentShopNow = ({
  onClick = () => {},
  variant = ButtonVariant.normal,
  icon = false,
  price
}: ButtonType) => {
  let bgColor: string = "#4172DC";
  switch (variant) {
    case ButtonVariant.normal:
      bgColor = "bg-blue-400";
      break;
    case ButtonVariant.primary:
      bgColor = "bg-blue-700";
      break;
    case ButtonVariant.light:
      bgColor = "bg-blue-200";
      break;
    case ButtonVariant.disabled:
      bgColor = "bg-gray-300";
      break;
  }
  if(price) bgColor = "transparent";
  return (
    <a
      onClick={onClick}
      className={`flex flex-col items-center md:flex-row gap-2  px-[16px] py-[8px] text-[12px]  md:px-[32px] md:py-[16px] text-white  cursor-pointer ${price?"border-[2px] border-white":""} ${bgColor} rounded-md`}
    >
      {price!= undefined && <span>${price}</span>}
      {icon && <ShopNowIcon/>} <span className="shrink-0">SHOP NOW</span>
    </a>
  );
};
