import { ComponentHoverMenu } from "./ComponentHoverMenu";
export const ComponentMenu = () => {
  return (
    <ul className="flex justify-evenly   text-[14px] w-full max-w-full p-2 ">
      <li className="shrink-0 group text-secondary relative  ">
        <a className="cursor-pointer">Women</a>
        <div className="group-hover:block w-[800px] dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative ">
        <a className="cursor-pointer">Male</a>
        <div className="group-hover:block w-[800px] dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative">
        <a className="cursor-pointer">Mother-Child</a>
        <div className="group-hover:block w-[800px] dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative">
        <a className="cursor-pointer">Home & Furniture</a>
        <div className="group-hover:block w-[800px] dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative ">
        <a className="cursor-pointer">Super market</a>
        <div className="group-hover:block w-[800px] dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative ">
        <a className="cursor-pointer">Cosmetics</a>
        <div className="group-hover:block w-[800px] right-0 dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative ">
        <a className="cursor-pointer">Shoe & Bag</a>
        <div className="group-hover:block w-[800px] right-0 dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative ">
        <a className="cursor-pointer">Electronic</a>
        <div className="group-hover:block w-[800px] right-0 dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative ">
        <a className="cursor-pointer">Sport & Outdoor</a>
        <div className="group-hover:block w-[800px] right-0 dropdown-menu p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
      <li className="shrink-0 group text-secondary relative ">
        <a className="cursor-pointer">Best seller</a>
        <div className="group-hover:block w-[800px] dropdown-menu right-0 p-4 bg-white  absolute z-10  hidden rounded-md h-auto">
          <ComponentHoverMenu />
        </div>
      </li>
    </ul>
  );
};
