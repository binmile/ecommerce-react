import { useSelector } from "react-redux";
import { CartIcon, HamBurgerIcon, Logo } from "../../../../assets/Header";
import { RootState } from "../../../../App/store";
import { useNavigate } from "react-router-dom";

export const ComponentLogoHeader = () => {
  const cart = useSelector((state:RootState)=>Object.keys(state.cart));
  const navigation = useNavigate();
  return (
    <div className="flex items-center justify-between  p-1">
      <div className="md:hidden cursor-pointer">
        <HamBurgerIcon />
      </div>
      <div className="flex items-center">
        <div className="w-[49px] h-[33px]">
          <img src={Logo} className="w-full h-full" />
        </div>
        <div className="text-[32px] font-[700] cursor-pointer" onClick={()=>navigation('/')}>Luminae</div>
      </div>
      <div className="flex gap-[1px] md:hidden cursor-pointer">
        <CartIcon />
        <div className="flex w-[25px] h-[25px] text-[14px] text-white justify-center items-center rounded-full bg-[#3DC47E]">{cart.length}</div>
      </div>
    </div>
  );
};
