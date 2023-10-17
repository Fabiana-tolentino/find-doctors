import Composition from '../../assets/composition.svg'
import Dollar from '../../assets/dollar.svg'
import PieTwo from '../../assets/pie-two.svg'
import EveryUser from '../../assets/every-user.svg'
import Remind from '../../assets/remind.svg'
import Help from '../../assets/help.svg'

import Logo from '../../assets/logoSmall.svg'
import { LinkSideBar } from './linkSideBar'

export function SideBarSmall() {
  return (
    <div className="w-20">
      <div className="bg-green-4 w-20 flex flex-col gap-10 items-center py-4 px-2 fixed h-full">
        <div>
          <img src={Logo} />
        </div>
        <div
          id="menu"
          className=" flex flex-col text-white text-base gap-8 w-full p-2"
        >
          <LinkSideBar url={'/dashbord'} icon={PieTwo} alt={'dashbord'} />
          <LinkSideBar url={'/users'} icon={EveryUser} alt={'dashbord'} />
          <LinkSideBar url={'/plans'} icon={Dollar} alt={'plans'} />
          <LinkSideBar url={'/spec'} icon={Composition} alt={'specialities'} />
          <LinkSideBar
            url={'/notification'}
            icon={Remind}
            alt={'notification'}
          />
          <LinkSideBar url={'/faq'} icon={Help} alt={'faq'} />
        </div>
      </div>
    </div>
  )
}
