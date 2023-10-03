import { BannerWomenImage } from "../../assets/Banner"
import { ComponentShopNow } from "../Buttons/ComponentShopNow"
import { ButtonVariant } from "../Buttons/type.d"
import { ComponentPromo } from "./ComponentPromo"

export const ComponentBanner = () => {
  return (
    <div className="hidden md:flex h-[460px] w-full">
      <img src={BannerWomenImage} className="w-[50%]  xl:w-[547px]"/>
      <div className="flex flex-1 flex-col text-center overflow-visible  text-white bg-blue-500 justify-center items-center gap-[30px] relative">
        <div className="absolute left-[-120px]">
            <ComponentPromo/>
        </div>
        <h1 className="text-[32px] w-[315px] xl:w-[400px] font-bold">Kimonos, Caftans & Pareos</h1>
        <p className="text-[28px] w-[315px] xl:w-[450px]">Poolside glam included From $4.99</p>
        <ComponentShopNow variant={ButtonVariant.primary} icon={true}/>

      </div>
    </div>
  )
}
