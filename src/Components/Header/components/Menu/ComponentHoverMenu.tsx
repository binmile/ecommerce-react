export const ComponentHoverMenu = () => {
  return (
    <div className=" grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <ul className="flex flex-col gap-1">
            <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer  ">SHOE & BAG</span>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Casual Shoes</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Boots</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Scandals</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Slippers</li>
        </ul>
        <ul className="flex flex-col gap-1">
        <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer  ">HOME & TEXTILE</span>

          <li className="flex hover:font-bold shrink-0 cursor-pointer">Bedding</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Pillows</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Handkerchief Towels</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Curtain</li>
        </ul>
        <ul className="flex flex-col gap-1">
        <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer  ">LUXURY & DESIGNER</span>

          <li className="flex hover:font-bold shrink-0 cursor-pointer">Towels</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Bathroom Scales</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Bath Mats</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Shower</li>
        </ul>
        <ul className="flex flex-col gap-1">
        <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer  ">COSMETICS</span>

          <li className="flex hover:font-bold shrink-0 cursor-pointer">Shampoo and Conditioner</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Styling Products</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Hair Accessories</li>
          <li className="flex hover:font-bold shrink-0 cursor-pointer">Men's Grooming</li>
        </ul>
      </div>
      <div className="flex flex-row gap-4">
         <div className="flex flex-col gap-7">
            <ul className="flex flex-col gap-1">
            <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer  ">PARTY SUPPLIES</span>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Event & Party </li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Christmas</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Artificial Decorations</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Wedding</li>
            </ul>
            <ul className="flex flex-col gap-1">
            <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer  ">SPORT & OUTDOORS</span>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Team Sport</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Water Sport</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Outdoor Recreation</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Fitness Equipment</li>
            </ul>
         </div>
         <ul className="flex flex-col gap-1">
         <span className="shrink-0 font-bold text-[14px] mb-3 cursor-pointer  ">CLOTHES</span>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Bottoms</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Women's Clothing</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">T-shirts and Tops</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Dresses</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Outwear</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Formal Wear</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Casual Wear</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Seasonal Collections</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Sport Bras</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Workout Tops</li>
                <li className="flex hover:font-bold shrink-0 cursor-pointer">Fall Wardrobe</li>
            </ul>
      </div>
    </div>
  );
};
