import { Rating } from "@mui/material";
type RatingTileType = {
    rating? : number,
    count? : number
}

export const ComponentRatingTile = ({
    rating=100,
    count=25
}:RatingTileType) => {
    const startCount = rating/count;
  return (
    <div className="flex gap-2 items-center">
         <Rating value={startCount} /> 
         <span className="text-secondary text-[12px]">( {count} )</span> 
    </div>
  )
}
