/* eslint-disable no-useless-escape */
import { useSelector } from "react-redux";
import { RootState } from "../../App/store";
import { ComponentOrderSummary } from "./Components/ComponentOrderSummary";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ComponentCustomerAndShippingDetail } from "./Components/ComponentCustomerAndShippingDetail";
import { ComponentCartDetail } from "./Components/ComponentCartDetail";
import { FormType } from "./type.d";
import { ComponentShippingAndPaymentMethods } from "./Components/ComponentShippingAndPaymentMethods";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object<FormType>().shape({
  name: yup.object({
    firstName: yup.string().required("first Name is Required"),
    lastName: yup.string().required("last Name is Required"),
  }),
  address: yup.string().required("address is Required"),
  email: yup.string().email().required("email is Required"),
  payment: yup.string().required("payment is Required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("phone number is required"),
  shipping: yup.string().required(),
  state: yup.string().required(),
  country: yup.string().required(),
});

export const CartAndCheckOutScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const cartListItem = Array.from(
    Object.keys(cartItems).map((item) => cartItems[item])
  );

  let total: number = 0;
  cartListItem.forEach(
    ({ product, quantity }) =>
      (total +=
        quantity * (product.cost! - (product.discount! * product.cost!) / 100))
  );
  const [value, setValue] = useState("1");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { register, handleSubmit, formState } = useForm<FormType>({
    resolver: yupResolver<FormType>(schema),
  });
  const { errors, isValid, isDirty } = formState;
  const handleForm = (data: unknown) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex flex-col p-6 w-full"
    >
      <TabContext value={value}>
        <div className="flex justify-center border-b-2 px-2 mt-[-10px">
          <TabList
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                fontWeight: "bold",
                backgroundColor: "black",
              },
            }}
            onChange={handleChange}
            variant="scrollable"
          >
            <Tab
              label={`cart(${cartListItem.length})`}
              sx={{ fontSize: "small" }}
              value={"1"}
            />
            <Tab label="CUSTOMER INFO" value={"2"} sx={{ fontSize: "small" }} />
            <Tab
              label="SHIPPING & PAYMENT"
              value={"3"}
              sx={{ fontSize: "small" }}
            />
          </TabList>
        </div>

        <div className="flex flex-1 flex-col md:flex-row   items-center md:justify-between  w-full my-4 ">
          <TabPanel value="1" className="flex-1">
            <ComponentCartDetail />
          </TabPanel>
          <TabPanel value="2" className="flex-1 ">
            <ComponentCustomerAndShippingDetail
              register={register}
              errors={errors}
            />
          </TabPanel>
          <TabPanel value="3" className="flex-1 w-full h-full">
            <ComponentShippingAndPaymentMethods register={register} />
          </TabPanel>
          <ComponentOrderSummary
            isDisabled={!isValid || !isDirty}
            price={Math.floor(total)}
          />
        </div>
      </TabContext>
    </form>
  );
};
