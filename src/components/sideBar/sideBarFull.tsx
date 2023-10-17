import ButtonDefault from '../ui/button'

import dashbord from '../../assets/dashboard.png'
import logoMed from '../../assets/LogoMed.png'
import register from '../../assets/register-users.png'
import plans from '../../assets/plans.png'
import specialities from '../../assets/specialities.png'
import notification from '../../assets/notifications.png'
import faq from '../../assets/faq.png'

export function SideBarFull() {
  return (
    <div className="w-72 mr-10">
      <div className=" bg-green-4 w-72 flex flex-col gap-10 items-center py-4 px-2 fixed h-full">
        <div id="logo" className="bg-green-4 h-[80px] w-[180px] ">
          <img src={logoMed} alt="logoMed" />
        </div>

        <div
          id="menu"
          className=" flex flex-col text-white text-base gap-8 w-full p-2"
        >
          <ButtonDefault url="/dashbord" transparent="bg-transparent">
            <img src={dashbord} alt="dashboard" className="mr-2" />
            Dashboard
          </ButtonDefault>
          <ButtonDefault url="/users" transparent="bg-transparent">
            <img src={register} alt="register-users" className="mr-2" />
            Usuários Cadastrados
          </ButtonDefault>
          <ButtonDefault url="/plans" transparent="bg-transparent">
            <img src={plans} alt="plans" className="mr-2" />
            Planos
          </ButtonDefault>
          <ButtonDefault url="/spec" transparent="bg-transparent">
            <img src={specialities} alt="specialities" className="mr-2" />
            Especialidades
          </ButtonDefault>
          <ButtonDefault url="/notifications" transparent="bg-transparent">
            <img src={notification} alt="notifications" className="mr-2" />
            Notificações
          </ButtonDefault>

          <ButtonDefault url="/faq" transparent="bg-transparent">
            <img src={faq} alt="faq" className="mr-2" />
            FAQ
          </ButtonDefault>
        </div>
      </div>
    </div>
  )
}
