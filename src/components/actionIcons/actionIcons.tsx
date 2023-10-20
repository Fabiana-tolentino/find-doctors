import { MdOutlineVisibility } from 'react-icons/md'
import { MdMode } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'

export function ActionIcons() {
  return (
    <div className="flex gap-6  ">
      <div className=" ">
        <button>
          <MdOutlineVisibility
            size={28}
            className=" flex rounded-lg borde bg-gray-300 border-gray-300"
          />
        </button>
        <button>
          <MdMode
            size={28}
            className=" flex rounded-lg borde bg-gray-300 border-gray-300"
          />
        </button>

        <button>
          <RiDeleteBin6Line
            size={28}
            className=" flex rounded-lg borde bg-gray-300 border-gray-300"
          />
        </button>
      </div>
    </div>
  )
}
