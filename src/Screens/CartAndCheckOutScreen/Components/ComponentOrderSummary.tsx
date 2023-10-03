import { Button } from "@mui/material";

type OrderSummary = {
  price: number;
  isDisabled: boolean;
};
export const ComponentOrderSummary = ({ price,isDisabled }: OrderSummary) => {
  return (
    <div className="flex gap-4 flex-col rounded-md bg-[#E9E9E9] p-4 w-[350px]">
      <span className="text-[22px] font-bold">Order Summary</span>
      <span className="flex justify-between">
        <span>Price</span> <b>${Math.floor(price)}</b>
      </span>
      <span className="flex justify-between">
        <span>Shipping</span> <b>${0}</b>
      </span>
      <span className="flex justify-between">
        <span>Tax</span> <b>${(price * 18) / 100}</b>
      </span>
      <div className="div w-full h-[1px] bg-black"></div>
      <span className="flex justify-between">
        <span>Total Price</span>{" "}
        <b>${Math.floor(price + (price * 18) / 100)}</b>
      </span>
      <Button type="submit" disabled={isDisabled} variant="contained">SHOP NOW</Button>
    </div>
  );
};
