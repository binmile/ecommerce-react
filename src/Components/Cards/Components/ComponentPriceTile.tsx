type PriceTileType = {
    cost? : number,
    discount? : number,
    primary? :boolean
}
export const ComponentPriceTile = ({
    cost=100,
    discount=25,
    primary=false

}:PriceTileType) => {
    const costAfterDiscount = Math.round(cost - cost * discount / 100);
  return (
    <div className="inline-flex gap-3 my-2 items-center ">
            <span className="text-red-600 font-bold">${costAfterDiscount}</span>
            <span className="line-through text-secondary">${cost}</span>
            <span className={`inline-block  ${primary?"bg-red-600 text-white ":"text-red-500"}  py-[3px] px-[6px]`} >-{discount}%</span>
        </div>
  )
}
