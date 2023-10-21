import { MdOutlineVisibility } from 'react-icons/md'
import { MdMode } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'

export function ActionIcons() {
  return (
    <div className="flex gap-6  ">
      <button className="bg-white shadow-md  rounded-lg p-1">
        <MdOutlineVisibility size={28} className=" flex rounded-lg" />
      </button>
      <button className="bg-white shadow-md rounded-lg p-1">
        <MdMode size={28} className=" flex rounded-lg text-blue-500" />
      </button>

      <button className="bg-white shadow-md rounded-lg p-1">
        <RiDeleteBin6Line size={28} className=" flex rounded-lg text-red " />
      </button>
    </div>
  )
}
