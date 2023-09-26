import { ReactNode } from 'react'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode
}

export default function Button({ children }: Props) {
  return (
    <button className="rounded-xl bg-green-4 w-full h-14 text-white my-10">
      {children}
    </button>
  )
}
