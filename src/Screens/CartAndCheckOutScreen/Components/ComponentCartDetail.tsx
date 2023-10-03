import { useSelector } from "react-redux";
import { CartTileWithDelete } from "./ComponentCartTileWithDelete"
import { RootState } from "../../../App/store";



export const ComponentCartDetail = () => {
    const cartItems = useSelector((state: RootState) => state.cart);
  const cartListItem = Array.from(
    Object.keys(cartItems).map((item) => cartItems[item])
  );
  return (
    <div className="flex flex-col gap-2 md:p-6 w-full">
    <h1 className="text-[20px] font-bold">
      Cart{" "}
      <span className="text-[18px] text-secondary font-normal">
        {cartListItem.length}
      </span>
    </h1>
    <div className="grid grid-cols-1">
      {cartListItem.map((item) => (
        <CartTileWithDelete key={item.product.id} {...item} />
      ))}
    </div>
  </div>
  )
}
