type TitleValueSquare = {
  title:string,
  value:string[]
}

export const ComponentTitleValueWithSquareBox = ({title,value}:TitleValueSquare) => {
  return (
     <div className="flex gap-3 items-center">
      <span className="text-[16px] font-bold capitalize">{title}</span> 
      <div className="flex gap-4">
      {value.map((item)=><span  key={item} className="border-2 p-2 cursor-pointer">{item}</span>)}
      </div>
     </div>
  )
}
