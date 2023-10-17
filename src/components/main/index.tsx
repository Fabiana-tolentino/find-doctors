import frame from '../../assets/Frame 8805.png'
import user from '../../assets/register-users.png'
import { BoxContent } from '../boxMain/boxContent'
import user2 from '../../assets/hirer.png'

export default function Main() {
  return (
    <div className="flex p-4 w-full ">
      <div className="w-[37rem] ">
        <img src={frame} alt="Frame" />
      </div>

      <div className="  flex flex-col h-full my-5 gap-5 flex-1">
        <div className="flex flex-col bg-white rounded-2xl gap-3 p-4">
          <span className="font-medium">Médicos</span>
          <div className=" flex gap-4">
            <BoxContent
              icon={user}
              title={'Total'}
              value={'1000'}
              color={'bg-blue-500'}
            />
            <BoxContent
              icon={user}
              title={'Disponíveis'}
              value={'900'}
              color={'bg-green'}
            />
            <BoxContent
              icon={user}
              title={'Indisponíveis'}
              value={'100'}
              color={'bg-red'}
            />
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-2xl gap-3 p-4">
          <span className="font-medium">Contratantes</span>
          <div className="flex gap-4">
            <BoxContent
              icon={user2}
              title={'Total'}
              value={'1000'}
              color={'bg-blue-500'}
            />
            <BoxContent
              icon={user2}
              title={'Ativos'}
              value={'900'}
              color={'bg-green'}
            />
            <BoxContent
              icon={user2}
              title={'Inativos'}
              value={'100'}
              color={'bg-red'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
