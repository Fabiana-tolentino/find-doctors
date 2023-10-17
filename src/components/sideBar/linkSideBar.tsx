import dashbord from '@/pages/dashbord'
import { Link } from 'react-router-dom'

interface LinkSideBarProps {
  url: string
  icon: string
  alt: string
}

export function LinkSideBar(props: LinkSideBarProps) {
  return (
    <div className="p-2 hover:bg-green-1 rounded-xl">
      <Link to={props.url}>
        <div className="flex items-center justify-center ">
          <img src={props.icon} alt={props.alt} className="" />
        </div>
      </Link>
    </div>
  )
}
