/* eslint-disable no-useless-escape */
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { ComponentCustomerAndShippingDetailType } from "../type.d";


export const ComponentCustomerAndShippingDetail = ({register,errors}:ComponentCustomerAndShippingDetailType) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-[20px] mb-[20px] justify-start">
        Customer Information
      </h2>
      <TextField
        fullWidth
        label="E-mail"
        {...register("email", {
          required: "Email required",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "invalid email address",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message as string}
      />

      <div className="flex gap-1">
        <TextField
          fullWidth
          label="First Name"
          {...register("name.firstName", {
            required: "first name required",
          })}
          error={!!errors.name}
          helperText={errors.name?.firstName?.message}
        />
        <TextField
          fullWidth
          label="last Name"
          {...register("name.lastName", {
            required: "last name required",
          })}
          error={!!errors.name}
          helperText={errors.name?.lastName?.message}
        />
      </div>

      <h2 className="font-bold text-[20px] mb-[20px] justify-start">
        Shipping Address
      </h2>
      <FormControl>
        <InputLabel id="country">Country</InputLabel>
        <Select
          label="Country"
          id="Country"
          {...register("country", { required: "Country is required" })}
        >
          <MenuItem value={"india"}>India</MenuItem>
          <MenuItem value={"usa"}>USA</MenuItem>
          <MenuItem className="w-full hover:bg-slate-300" value={"russia"}>
            russia
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="state">State</InputLabel>
        <Select
          label="state"
          id="state"
          {...register("state", { required: "state is required" })}
        >
          <MenuItem value={"india"}>India</MenuItem>
          <MenuItem value={"usa"}>USA</MenuItem>
          <MenuItem className="w-full hover:bg-slate-300" value={"russia"}>
            russia
          </MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Address"
        {...register("address", { required: "Address is required" })}
      />
      <TextField
        label="PhoneNo"
        {...register("phoneNumber", {
          required: "phoneNO is required",
          pattern: {
            value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
            message: "Please enter a valid phone number",
          },
        })}
      />
    </div>
  );
};
