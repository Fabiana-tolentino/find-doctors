import add from '../../../assets/add.png'

interface ButtonNewProps {
  name: string
}

export function ButtonNew(props: ButtonNewProps) {
  return (
    <button className=" flex gap-2 border border-green bg-green rounded-2xl px-16 py-4  text-white">
      <img src={add} alt="add" />
      {props.name}
    </button>
  )
}
