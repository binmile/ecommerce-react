export const ComponentUpperFooter = () => {
  return (
    <div className="flex justify-center items-center text-secondary bg-[#D1E2EB] w-full px-[40px] py-[40px] md:px-[70px] lg:px-[90px]  lg:mt-[100px]">

    <div className="grid  justify-evenly   gap-x-[150px] gap-y-[50px]  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-4 lg:mt-[100px]">
      <ul className="flex flex-col gap-1">
            <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer hover:text-[#151414] ">Company</span>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">About Us</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Our Store</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Contact us</li>
        </ul>
        <ul className="flex flex-col gap-1">
            <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer hover:text-[#151414] ">Career Opportunities</span>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Selling Programs</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Advertise</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Cooperation opportunities</li>
        </ul>
        <ul className="flex flex-col gap-1">
            <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer hover:text-[#151414] ">How to Buy</span>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Making Payments</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Delivery Options</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Buyer Protection</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">New User Guide</li>
        </ul>
        <ul className="flex flex-col gap-1">
            <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer hover:text-[#151414] ">Help</span>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Contacts Us</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">FAQ</li>
          <li className=" gap-2 inline-flex hover:text-[#151414] shrink-0 cursor-pointer">Privacy Policy</li>
        </ul>
    </div>
    </div>
  )
}
