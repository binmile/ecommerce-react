import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type CategoryMenuType = {
  title: string;
  itemCount: number;
  dropdownItems: {text:string,value:string}[];
  value: string;
  onChange: (title: string) => void;
};


export const ComponentCategoryMenu = ({
  dropdownItems,
  itemCount,
  onChange,
  value,
  title,
}: CategoryMenuType) => {
  return (
    <div className="hidden md:flex p-4 justify-between bg-[#E9E9E9] items-center">
      <div className="flex gap-2 items-center text-light-primary-text ">
        <span className="font-bold text-[20px]">{title}</span>
        <span className="text-[16px]">{itemCount} items</span>
      </div>

      <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Sort</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="sort"
        onChange={(e)=>onChange(e.target.value)}
      >
        {dropdownItems.map((item)=><MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>)}
      </Select>
    </FormControl>
    </div>
    </div>
  );
};
