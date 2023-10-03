import { BrowserRouter } from "react-router-dom";
import ComponentFooter from "./Components/Footer/ComponentFooter";


import { ComponentHeader } from "./Components/Header/ComponentHeader";
import { RouteManager } from "./Routes/RouteManager";

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col items-start w-[100vw]  overflow-x-hidden">
      <ComponentHeader />
        <RouteManager/>
      <ComponentFooter/>
    </div>
    </BrowserRouter>
  );
}

export default App;
