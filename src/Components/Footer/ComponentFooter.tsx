import ComponentLowerFooter from "./Components/ComponentLowerFooter";
import { ComponentSubscription } from "./Components/ComponentSubscription";
import { ComponentUpperFooter } from "./Components/ComponentUpperFooter";

const ComponentFooter = () => {
  return (
    <div className="flex flex-col w-full relative ">
      <div className=" hidden absolute  lg:flex w-full justify-center items-center">
        <ComponentSubscription />
      </div>
      <ComponentUpperFooter />
      <ComponentLowerFooter/>
    </div>
  );
};

export default ComponentFooter;
