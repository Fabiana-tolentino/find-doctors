import { ButtonNew } from '../ui/button/buttonNew'
import { CiFilter } from 'react-icons/ci'

export function HeaderFaq() {
  return (
    <div
      id="inputSearch"
      className="py-4 w-full flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Pesquise uma palavra-chave"
          className="py-4 px-3 min-w-[25rem] rounded-2xl outline-gray-300 border-2 border-gray-300 "
        />

        <div className="p-4 bg-gray rounded-2xl">
          <CiFilter className=" text-green-4" size={28} />
        </div>
      </div>
      <ButtonNew name={'Novo FAQ'} />
    </div>
  )
}
