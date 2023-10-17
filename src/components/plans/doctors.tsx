import { TableHeadPlans } from '../table/tableHeadPlans'
import { TablePlans } from '../table/tablePlans'
import Button from '../ui/button'
import { ButtonNew } from '../ui/button/buttonNew'

export function Doctors() {
  return (
    <div>
      <div
        id="inputSearch"
        className="py-4 w-full flex items-center justify-between"
      >
        <div className="flex items-center">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Pesquise uma palavra-chave"
            className="py-4 px-3 min-w-[25rem] rounded-2xl outline-gray-300 border-2 border-gray-300 "
          />

          <div>icon</div>
        </div>
        <ButtonNew name={'Novo Plano'} />
      </div>
      <div className="rounded-xl bg-green-4 pt-2">
        <table className="w-full rounded-xl bg-white ">
          <TableHeadPlans />
          <TablePlans
            type={'Mensal'}
            value={'100'}
            promotion={'98'}
            situation={<>Situação </>}
            actions={<>Ação </>}
          />
          <TablePlans
            type={'Trimestral'}
            value={'200'}
            promotion={'198'}
            situation={<> Situação </>}
            actions={<> Ação</>}
          />
          <TablePlans
            type={'Semestral'}
            value={'300'}
            promotion={'--'}
            situation={<> Situação</>}
            actions={<>Ação </>}
          />
        </table>
      </div>
    </div>
  )
}
