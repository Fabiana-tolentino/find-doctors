import { useEffect, useState } from 'react'
import { ActionIcons } from '../actionIcons/actionIcons'
import { TableHeadPlans } from '../table/tableHeadPlans'
import { TablePlans } from '../table/tablePlans'
import Button from '../ui/button'
import { ButtonNew } from '../ui/button/buttonNew'
import { HeaderPlans } from './headerPlans'
import { getPlans } from '@/api/getPlans'

export interface plansOptions {
  id: number
  planTitle: string
  enabled: boolean
  period: string
  type: string
  values: number
}

export function Doctors() {
  const [doctorPlans, setDoctorPlans] = useState<plansOptions>()

  useEffect(() => {
    getPlans(setDoctorPlans, 'medico')
  }, [])

  return (
    <div>
      <HeaderPlans />
      <div className="rounded-xl bg-green-4 pt-2">
        <table className="w-full rounded-xl bg-white ">
          <TableHeadPlans />

          {doctorPlans?.map((plan: plansOptions) => (
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
