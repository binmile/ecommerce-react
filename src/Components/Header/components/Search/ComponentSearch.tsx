import { ArrowIcon } from "../../../../assets/Header/ArrowIcon";

export const ComponentSearch = () => {
  return (
    <div className="rounded-md border-[1px] border-solid border-[#D9D9D9] px-[10px] py-[6px]  md:px-[12px] md:py-[8px] lg:px-[14px] lg:py-[10px] inline-flex items-center gap-[4px] sm:gap-[12px] md:gap-[15px] shrink-0  ">
      <div className="flex items-center flex-1  sm:gap-[5px] shrink-0">
        <input
          type="text"
          placeholder="Search Products"
          className="outline-none flex-1 inline-block w-[100px] placeholder:align-middle sm:w-[150px] md:w-[200px]   text-[8px]  sm:text-[12px] md:text-[14px] text-[#9D9D9D] placeholder:text-[#9D9D9D]  placeholder:text-[8px] sm:placeholder:text-[12px] md:placeholder:text-[14px]"
        />
        <div className="flex  justify-center items-center shrink-0 text-[#262626]  text-[8px]  sm:text-[12px] md:text-[14px] h-full">
          All Categories
        </div>
        <div className="flex items-center justify-center w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] cursor-pointer">
          <ArrowIcon />
        </div>
      </div>
      <div className="w-[1px] h-[30px] bg-[#E9E9E9]"></div>
      <div className="flex items-center justify-center w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <g clipPath="url(#clip0_121_20524)">
            <path
              d="M19.1141 19.7108L17.3597 17.9565M1.57019 10.5003C1.57019 5.89795 5.30115 2.16699 9.90352 2.16699C14.5059 2.16699 18.2369 5.89795 18.2369 10.5003C18.2369 15.1027 14.5059 18.8337 9.90352 18.8337C5.30115 18.8337 1.57019 15.1027 1.57019 10.5003Z"
              stroke="#262626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_121_20524">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.938965)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
