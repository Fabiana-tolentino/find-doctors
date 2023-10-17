import { Link } from 'react-router-dom'

interface LinkPlansProps {
  url: string
  title: string
  count: string
}

export function LinkPlans(props: LinkPlansProps) {
  return (
    <Link
      to={props.url}
      className="p-4 bg-gray-button text-xl flex gap-5 items-center rounded-t-2xl"
    >
      {props.title}
      <div className="bg-green-1 rounded-full w-8 h-8 flex justify-center items-center">
        {props.count}
      </div>
    </Link>
  )
}
