import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode
} & {
  color?: string
  url?: string
  transparent?: string
}

export default function ButtonDefault({
  color,
  url,
  transparent,
  children,
  ...props
}: Props) {
  return (
    <Link to={url || ''}>
      <button
        {...props}
        className={`p-2 flex justify-start items-center gap-2 rounded-xl bg-green-4 w-full  text-white hover:bg-green-1 hover:text-green-4 ${color} ${transparent}`}
      >
        {children}
      </button>
    </Link>
  )
}
