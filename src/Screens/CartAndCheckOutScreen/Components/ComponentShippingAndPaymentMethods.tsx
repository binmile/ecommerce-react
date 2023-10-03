import { MasterCardImage, PaypalImage, VisaImage } from "../../../assets/Footer";
import { AusffImage, RaceImage, TransoCargoImage } from "../../../assets/PaymentAndShipping";
import { PaymentAndShippingType } from "../type";
import { PaymentMethodOrShippingMethodCard } from "./PaymentMethodOrShippingMethodCard";

export const ComponentShippingAndPaymentMethods = ({register}:PaymentAndShippingType) => {
  return (
    <div className="flex flex-col justify-center items-center xl:flex-row gap-3">
      <div className="flex flex-col gap-2">
        <h3>Payments</h3>
        <PaymentMethodOrShippingMethodCard  
        description="PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically."
        icon={PaypalImage}
        id="paypal"
        keyAttribute="payment"
        register={register}
        title="Paypal"
         />
          <PaymentMethodOrShippingMethodCard 
        description="PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically."
        icon={MasterCardImage}
        id="masterCard"
        keyAttribute="payment"
        register={register}
        title="Master Card"
         />
          <PaymentMethodOrShippingMethodCard 
        description="PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically."
        icon={VisaImage}
        id="visa"
        keyAttribute="payment"
        register={register}
        title="Visa"
         />
      </div>

      <div className="flex flex-col gap-2">
        <h3>Shipping</h3>
        <PaymentMethodOrShippingMethodCard  
        icon={AusffImage}
        id="AUSFF"
        keyAttribute="shipping"
        register={register}
        title="AUSFF"
        shippingCost={10}
        DeliveryTime="2-4 days"
        insurance="Available"
         />
          <PaymentMethodOrShippingMethodCard
        icon={RaceImage}
        id="masterCard"
        keyAttribute="shipping"
        register={register}
        shippingCost={0}
        DeliveryTime="10-12 days"
        title="Race Couter"
        insurance="Unavailable"
         />
          <PaymentMethodOrShippingMethodCard 
        icon={TransoCargoImage}
        id="TransoCargoImage"
        keyAttribute="shipping"
        register={register}
        title="TransoCargo"
        shippingCost={10}
        DeliveryTime="2-4 days"
        insurance="Available"
         />
      </div>

    </div>
  );
};
