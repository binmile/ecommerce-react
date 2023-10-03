import { FacebookIcon, InstagramIcon, TelegramIcon } from "../../../../assets/Header"

export const ComponentSocialMenu = () => {
  return (
    <ul className="flex items-center gap-[15px]">
        <li><InstagramIcon/></li>
        <li><FacebookIcon/></li>
        <li><TelegramIcon/></li>
    </ul>
  )
}
