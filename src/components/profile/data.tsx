import edit from '../../assets/edit.png'

export function Data() {
  return (
    <div className="flex flex-col py-6 px-12">
      <div className="font-bold text-3xl py-10"> Dados </div>
      <div className="flex justify-between gap-64 border-b-2 border-gray-300 pb-8 text-xl">
        <div className="font-bold"> Nome </div>
        <div> Izabel </div>
        <button>
          <img
            src={edit}
            alt="edit"
            className="border border-gray-300 bg-white rounded-lg p-2"
          />
        </button>
      </div>
      <div className="flex justify-between gap-64 py-10 border-b-2 border-gray-300 text-xl ">
        <div className="font-bold"> E-mail </div>
        <div> izabel@gmail.com </div>

        <button>
          <img
            src={edit}
            alt="edit"
            className="border border-gray-300 bg-white rounded-lg p-2"
          />
        </button>
      </div>
    </div>
  )
}
