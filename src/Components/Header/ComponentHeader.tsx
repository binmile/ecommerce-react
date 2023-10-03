import { ComponentHeaderLower } from "./ComponentHeaderLower";
import ComponentHeaderUpper from "./ComponentHeaderUpper";

import { ComponentMenu } from "./components/Menu/ComponentMenu";

export const ComponentHeader = () => {
  return (
    <header className="w-[100%] flex-col">
      <ComponentHeaderUpper />
      <ComponentHeaderLower />

      <div className="hidden md:flex w-full">
        <ComponentMenu />
      </div>
    </header>
  );
};
