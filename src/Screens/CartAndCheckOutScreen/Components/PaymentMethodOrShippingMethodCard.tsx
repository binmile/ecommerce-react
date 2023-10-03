import { PaymentMethodOrShippingMethodCardType } from "../type";

export const PaymentMethodOrShippingMethodCard = ({
  title,
  description,
  id,
  icon,
  insurance,
  register,
  keyAttribute,
  DeliveryTime,
  shippingCost
}: PaymentMethodOrShippingMethodCardType) => {
  return (
    <div className="flex w-[350px] h-[150px] gap-3 bg-[#E9E9E9] p-2 rounded-md">
      <input
        type="radio"
        value={id}
        {...register(keyAttribute)}
      />
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between">
          <h4 className="font-bold">{title}</h4>
          <img src={icon} className="w-[73px] h-[42px] object-contain" />
        </div>

       { description && <p>{description}</p>}
       { DeliveryTime &&<span>Delivery time: {DeliveryTime}</span> }
       {shippingCost && <span>shippingCost : {shippingCost ===0?"free":`$${shippingCost}`}</span>}
        {(insurance == "Available" || insurance == "Unavailable") && (
          <div className="flex">
            {" "}
            <span>insurance : </span>{" "}
            {insurance === "Available" ? (
              <span className="text-green-600">"Available"</span>
            ) : (
              <span className="text-red-600">"Unavailable"</span>
            )}{" "}
          </div>
        )}
      </div>
    </div>
  );
};
