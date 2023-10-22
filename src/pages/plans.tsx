import { LinkPlans } from '@/components/plans/linkPlans'
import { bgUsersAll } from '@/functions/pages/users'
import { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Plans() {
  const navigate = useNavigate()
  const locationNow = useLocation().pathname

  useEffect(() => {
    if (locationNow === '/plans') {
      navigate('/plans/doctors')
    }
  })

  const doctors = bgUsersAll(locationNow, '/plans/doctors')
  const contractors = bgUsersAll(locationNow, '/plans/contractors')

  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-semibold">Planos</h1>

      <div className="pt-8">
        <div className="flex gap-4">
          <LinkPlans
            url={'/plans/doctors'}
            title={'Médicos'}
            count={'3'}
            bg1={doctors?.bg1 || ''}
            bg2={doctors?.bg2 || ''}
            textColor={doctors?.textColor || ''}
            font={doctors?.font || ''}
          />
          <LinkPlans
            url={'/plans/contractors'}
            title={'Contratantes'}
            count={'2'}
            bg1={contractors?.bg1 || ''}
            bg2={contractors?.bg2 || ''}
            textColor={contractors?.textColor || ''}
            font={contractors?.font || ''}
          />
        </div>
        <div className="bg-white p-6 rounded-b-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
