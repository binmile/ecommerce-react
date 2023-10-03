import { FacebookOutlinedIcon, InstagramOutlinedIcon, MasterCardImage, PaypalImage, TelegramOutlinedIcon, VisaImage } from "../../../assets/Footer"
import { ArrowIcon } from "../../../assets/Header"

const ComponentLowerFooter = () => {
  return (
    <div className="flex flex-col px-[50px] sm:px-[100px] py-[24px] gap-3">
       <div className="flex justify-center md:justify-between items-center lg:border-b-[2px] border-solid py-3">
        <div className="flex gap-[25px] items-center">
            <div className="flex ">
              <img src={VisaImage}  className="w-[62px] h-[19px]"/>
              </div>
            <img src={MasterCardImage} className="w-[38px] h-[30px]"/>
            <img src={PaypalImage} className="w-[71px] h-[19px]"/>
        </div>
        <span className="hidden md:flex items-center  
        ">English <ArrowIcon/></span>
       </div>
       <div className="hidden lg:flex justify-between items-center text-[14px]">
        <span className="">165-179 Forster Road City of Monash, Melbourne, Australia</span>
        <span className="text-light-tritary-text">©2023 Copyright in reserved for lumine shop</span>
        <div className="flex gap-[25px] items-center justify-center">
           <InstagramOutlinedIcon/>
           <FacebookOutlinedIcon/>
           <TelegramOutlinedIcon/>
        </div>
       </div>
    </div>
  )
}

export default ComponentLowerFooter