import { useSelector } from "react-redux";
import {
  ArrowIcon,
  CartIcon,
  CategoryIcon,
  MenCosmetic,
} from "../../assets/Header";
import { FavoriteIcon } from "../../assets/Header/FavoriteIcon";
import { SignInIcon } from "../../assets/Header/SignInIcon";
import { ComponentMiniCart } from "./components/Cart/ComponentMiniCart";
import { ComponentFavoriteMiniList } from "./components/Favorite/ComponentFavoriteMiniList";
import { RootState } from "../../App/store";

export const ComponentHeaderLower = () => {
  const cart = useSelector((state: RootState)=>Object.keys(state.cart))
  return (
    <div className="hidden md:flex bg-color-grey items-center justify-evenly text-white py-[8px] px-[90px]">
      <div className="flex gap-4 ">
        <div className="flex gap-1">
          <CategoryIcon />
          <span>Categories</span>
        </div>
        <div className="hidden lg:flex gap-1 items-center">
          <span className="text-[12px]">usd</span>
          <div className="flex w-[16px] h-[16px] items-center">
            <ArrowIcon isDark={false} />
          </div>
        </div>
        <div className="hidden lg:flex gap-1 items-center">
          <span className="text-[12px]">English</span>
          <div className="flex w-[16px] h-[16px] items-center">
            <ArrowIcon isDark={false} />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden items-center">
        <div className=" flex gap-1 items-center">
          <span className="text-[12px]">usd</span>
          <div className="flex w-[16px] h-[16px] items-center">
            <ArrowIcon isDark={false} />
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-[12px]">English</span>
          <div className="flex w-[16px] h-[16px] items-center">
            <ArrowIcon isDark={false} />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex h-[30px] w-[1px] bg-dark-secondary"></div>
      <div className="hidden lg:flex gap-2">
        <img src={MenCosmetic} className="w-[63px] h-[62px]" />
        <div className="flex flex-col justify-center items-start">
          <span className="text-[12px] font-bold">
            Weekly Men's Toiletries Coupons.
          </span>
          <span className="text-[12px] text-dark-secondary">
            We extend exclusive discounts to our male clientele
          </span>
        </div>
      </div>
      <div className="hidden lg:flex h-[30px] w-[1px]  bg-dark-secondary"></div>
      <div className="flex gap-4  text-[14px]">
        <div className=" flex gap-1 ">
          <SignInIcon />
          <span>Sign</span>
        </div>
        <div className=" relative group flex gap-1 items-center">
          <div className="flex cursor-pointer w-[16px] h-[16px] items-center">
            <FavoriteIcon isDark={false} />
          </div>
          <span className="cursor-pointer">Favorites</span>
          <div className="group-hover:block w-[350px] dropdown-menu p-4 bg-white   absolute z-10  hidden rounded-md right-0 top-6">
            <ComponentFavoriteMiniList/>
          </div>
        </div>
        <div className=" relative group flex gap-1 items-center">
          <div className=" flex w-[16px] h-[16px] items-center">
            <CartIcon isDark={false} />
          </div>
          <span className="cursor-pointer">Card</span>
          <div className="cursor-pointer flex w-[25px] h-[25px] text-[14px] text-white justify-center items-center rounded-full bg-[#3DC47E]">
            {cart.length}
          </div>
          <div className="group-hover:block w-[350px]  dropdown-menu p-4 bg-white   absolute z-10  hidden rounded-md right-0  top-6">
            <ComponentMiniCart/>
          </div>
        </div>
      </div>
    </div>
  );
};
