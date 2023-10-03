import { SendIcon } from "../../../assets/Footer";


export const ComponentSubscription = () => {
  return <div className="flex justify-center items-center py-[32px] px-[56px] flex-col w-[571px] gap-4 rounded-md text-white bg-[#7296AB] h-[200px]">
           <h3 className="font-bold text-[32px]">Luminae <span className="text-[#D1E2EB]">Store</span></h3>
           <p className="text-[16px] font-[400px]">Register your email not to miss the last minutes off+ Free delivery</p>
           <div className="flex bg-white w-[268px] px-[12px] rounded-md py-[8px]">
              <input type="text" placeholder="Enter Your Email" className="outline-none flex-1  text-black"  />
              <button><SendIcon/></button>
           </div>
  </div>;
};
