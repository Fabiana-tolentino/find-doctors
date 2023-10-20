import { TableHeadPlans } from '../table/tableHeadPlans'
import { TablePlans } from '../table/tablePlans'
import { HeaderPlans } from './headerPlans'

export function Contractors() {
  return (
    <div>
      <HeaderPlans />

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
