interface boxContentProps {
  icon: string
  title: string
  value: number
  color: string
}

export function BoxContent({ icon, title, value, color }: boxContentProps) {
  return (
    <div className="bg-gray flex  items-center w-full h-32 rounded-2xl px-6 gap-2 ">
      <div className={` p-4 rounded-full ${color}`}>
        <img src={icon} alt="User" height={28} width={28} />
      </div>
      <div className="flex flex-col p-3 ">
        <span className="text-base "> {title} </span>
        <span className="text-3xl font-bold"> {value} </span>
      </div>
    </div>
  )
}
