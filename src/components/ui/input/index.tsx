import { ReactNode } from 'react'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  children?: ReactNode
} & {
  name: string
  tipo: string
}

export default function Input({ name, tipo, children, ...props }: Props) {
  return (
    <div className="relative z-0 w-full">
      <label
        htmlFor={name}
        className="text-gray-800 text-sm mb-2 flex flex-col focus:bg-green-1"
      >
        {name}
        <input
          type={tipo}
          name={name}
          id={name}
          className="border border-gray-300 px-1 py-4 rounded-2xl focus:outline-green-2"
          {...props}
        />
      </label>
    </div>
  )
}
