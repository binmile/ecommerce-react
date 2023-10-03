import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type CounterType = {
  data?: number;
  increment?: () => void;
  decrement?: () => void;
  onChange?: (value: number) => void;
};
export const ComponentCounter = ({
  data=1,
  decrement=()=>{},
  increment=()=>{},
  onChange=()=>{}

}: CounterType) => {
  return (
    <div className="inline-flex border-2 gap-2 p-2 items-center ">
      <IconButton onClick={decrement} className="w-[10px] h-[10px]" >
        <Remove />
      </IconButton>
      <input type="number" className="outline-none w-[25px] text-black remove-arrow text-center" value={data} onChange={(value)=>{onChange(+value.target.value)}} />
      <IconButton onClick={increment} className="w-[10px] h-[10px]">
        <Add />
      </IconButton>
    </div>
  );
};
