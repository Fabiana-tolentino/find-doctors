import Input from '../ui/input'

export function Search() {
  return (
    <div className="flex ">
      <div className="flex w-[80%] gap-4">
        <div className="w-[40%]">
          <Input name={''} tipo={''} placeholder="Pesquise a palavra chave " />
        </div>
        <div className="flex w-[60rem] gap-4">
          <Input name={''} tipo={''} placeholder="Estado (UF)" />
          <Input name={''} tipo={''} placeholder="Cidade" />
          <Input name={''} tipo={''} placeholder="Especialidade" />
        </div>
      </div>
    </div>
  )
}
