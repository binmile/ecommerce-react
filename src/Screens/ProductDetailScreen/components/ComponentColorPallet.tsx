
type colorType = {
    color : string[]
}
export const ComponentColorPallet = ({color}:colorType) => {
  return (
    <div className="flex gap-4 items-center">
        <span className="font-bold text-[16px]">Color </span>
        <div className="flex gap-2">
            {color.map(item=><span key={item} className="w-[10px] h-[10px] cursor-pointer rounded-full" style={{backgroundColor:item}}></span>)}
        </div>
    </div>
  )
}
