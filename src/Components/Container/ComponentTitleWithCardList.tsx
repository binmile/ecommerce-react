import { useNavigate } from "react-router-dom"

type TypeComponentTitleWithCardList = {
    title : string,
    children : React.ReactNode,
    path:string
}

export const ComponentTitleWithCardList = ({title,children,path}:TypeComponentTitleWithCardList) => {
  const navigator = useNavigate();
  return (
    <section className="flex flex-col w-full px-[10px] md:px-[90px] my-2 ">
     
      <div className="flex justify-between items-center">
        <h2 className=" text-[16px] md:text-[28px] font-[500] ">{title}</h2>
        <span className=" text-[8px] md:text-[12px] shrink-0" onClick={()=>navigator('products/'+path)}>View all {">"} </span>
      </div>

      <div className="flex overflow-x-scroll no-scrollbar w-[100%] gap-5 py-2">
        {children}
    </div>

    </section>
  )
}
