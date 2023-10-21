import { Link } from 'react-router-dom'

interface LinkPlansProps {
  url: string
  title: string
  count: string
  bg1: string
  bg2: string
  textColor: string
  font: string
}

export function LinkPlans(props: LinkPlansProps) {
  return (
    <Link
      to={props.url}
      className={`p-4 bg-gray-button ${props.bg1} ${props.font} text-xl flex gap-5 items-center rounded-t-2xl`}
    >
      {props.title}
      <div
        className={`bg-green-1 ${props.bg2} ${props.textColor} rounded-full w-8 h-8 flex justify-center items-center`}
      >
        {props.count}
      </div>
    </Link>
  )
}
