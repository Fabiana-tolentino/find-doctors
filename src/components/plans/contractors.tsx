import { useEffect, useState } from 'react'
import { TableHeadPlans } from '../table/tableHeadPlans'
import { TablePlans } from '../table/tablePlans'
import { HeaderPlans } from './headerPlans'
import { getPlans } from '@/api/getPlans'
import { plansOptions } from './doctors'
import { ActionIcons } from '../actionIcons/actionIcons'

export function Contractors() {
  const [contractorsPlans, setContractorsPlans] = useState<plansOptions>()

  useEffect(() => {
    getPlans(setContractorsPlans, 'contratante')
  }, [])

  return (
    <div>
      <HeaderPlans />

      <div className="rounded-xl bg-green-4 pt-2">
        <table className="w-full rounded-xl bg-white ">
          <TableHeadPlans />

          {contractorsPlans?.map((plan: plansOptions) => (
            <TablePlans
              key={plan.id}
              type={plan.period}
              value={plan.values}
              promotion={'Não informado'}
              situation={<>Situations</>}
              actions={<ActionIcons />}
            />
          ))}
        </table>
      </div>
    </div>
  )
}
