import { CardType } from "../../../Components/Cards/type";
import { ComponentCounter } from "../../../Components/Header/components/Cart/ComponentCounter";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeItem,
  setCartValue,
} from "../../../Feature/Cart/cartSlice";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
type CartTileType = {
  product: CardType;
  quantity: number;
};
export const CartTileWithDelete = ({ product, quantity }: CartTileType) => {
  const cost = product.cost! - (product.discount! * product.cost!) / 100;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  return (
    <div className="flex gap-2 flex-col sm:flex-row items-center  justify-between w-full md:w-[450px] my-3  ">
      <div className="flex gap-1 justify-between w-[100%] items-center">
        <img
          src={product.img}
          className=" w-[40px]  md:w-[50px] object-cover rounded-md"
        />
        <div className="flex flex-row justify-between flex-1 sm:flex-col">
          <span
            className="w-[60px] font-bold text-[16px] cursor-pointer"
            onClick={() => navigator("/product/" + product.id)}
          >
            {product.brand}
          </span>
          <span className="text-ellipsis overflow-hidden max-w-[100px]">
            {product.title}
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between items-center gap-4">
        <span className="w-[30px] md:w-[60px] ">${Math.floor(cost)}</span>

        <ComponentCounter
          data={quantity}
          decrement={() => dispatch(decrement(product.id))}
          increment={() => dispatch(increment(product.id))}
          onChange={(value) => {
            dispatch(setCartValue({ productId: product.id, quantity: value }));
          }}
        />
        <span className="w-[30px] md:w-[60px]">
          ${Math.floor(cost * quantity)}
        </span>
        <IconButton onClick={() => dispatch(removeItem(product.id))}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};
