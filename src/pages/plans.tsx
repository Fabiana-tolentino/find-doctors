import { LinkPlans } from '@/components/plans/linkPlans'
import { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function Plans() {
  const navigate = useNavigate()
  const locationNow = useLocation()

  useEffect(() => {
    if (locationNow.pathname === '/plans') {
      navigate('/plans/doctors')
    }
  })

  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-semibold">Planos</h1>
      <div>
        <div className="p-8 ">
          <div className="flex gap-4">
            <LinkPlans url={'/plans/doctors'} title={'Médicos'} count={'3'} />
            <LinkPlans
              url={'/plans/contractors'}
              title={'Contratantes'}
              count={'2'}
            />
          </div>
          <div className="bg-white p-6 rounded-b-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
