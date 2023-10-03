import { ComponentLogoHeader } from "./components/LogoHeader/ComponentLogoHeader"
import { ComponentHeaderMenu } from "./components/Menu/ComponentHeaderMenu"
import { ComponentSocialMenu } from "./components/Menu/ComponentSocialMenu"
import { ComponentSearch } from "./components/Search/ComponentSearch"

const ComponentHeaderUpper = () => {
  return (
    <div className="flex gap-2 p-4 w-[100%] flex-col md:gap-4 lg:gap-8 lg:flex-row md:justify-between">
        <div className="flex flex-col flex-1 md:flex-row justify-between ">
          <ComponentLogoHeader />
          <ComponentSearch />
        </div>
        <div className="hidden md:flex justify-between gap-[25px] xl:gap-[50px] text-[#555]">
          <ComponentHeaderMenu />
          <ComponentSocialMenu />
        </div>
      </div>
  )
}

export default ComponentHeaderUpper