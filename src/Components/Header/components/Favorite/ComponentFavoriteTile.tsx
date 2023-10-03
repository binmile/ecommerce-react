import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";


type cartTileType = {
    itemId : string,
    haveDivider : boolean
    title:string,
    url:string,
    cost:number
    remove:()=>void,
}
export const ComponentFavoriteTile = ({cost,remove,title,url,haveDivider=false}:cartTileType) => {
 return (
    <div className={`flex gap-2 justify-between py-2 items-center ${haveDivider && "border-b-2 border-solid text-secondary "}`}>
       <img src={url} className="w-[32px] object-contain" />
       <div className="flex flex-col text-secondary ">
        <h3>{title}</h3>
        <span>${Math.floor(cost)}</span>
       </div>
      <IconButton onClick={remove} className="w-[35px] h-[35px]">
        <Delete/>
      </IconButton>
   </div>
 )
}
