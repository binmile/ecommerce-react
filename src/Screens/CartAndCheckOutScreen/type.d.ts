import { FieldErrors, UseFormRegister } from "react-hook-form"

export type FormType = {
    email: string,
    name: { 
      firstName: string,
      lastName: string
    },
    country: string,
    state: string,
    phoneNumber: string,
    address:string,
    payment:string,
    shipping:string
  }
export type PaymentMethodOrShippingMethodCardType = {
    keyAttribute: "payment"| "shipping"
    id:string,
    title:string,
    description?:string,
    icon:string,
    insurance ?: "Available" | "Unavailable",
    shippingCost?:number,
    DeliveryTime?: string,
    register:UseFormRegister<FormType>,
    checked?:boolean
}

export type PaymentAndShippingType = {
  register: UseFormRegister<FormType>
}

export type ComponentCustomerAndShippingDetailType = {
  register:UseFormRegister<FormType>,
  errors:FieldErrors<FormType>
}