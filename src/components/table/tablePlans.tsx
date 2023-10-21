interface TablePlansProps {
  type: string
  value: number
  promotion: string
  situation: React.ReactNode
  actions: React.ReactNode
}

export function TablePlans(props: TablePlansProps) {
  return (
    <>
      <tr>
        <td className=" p-7">{props.type}</td>
        <td className=" ">{props.value}</td>
        <td className=" ">{props.promotion}</td>
        <td className=" ">{props.situation}</td>
        <td className=" ">{props.actions}</td>
      </tr>
    </>
  )
}
