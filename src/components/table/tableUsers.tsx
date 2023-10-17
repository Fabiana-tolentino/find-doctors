import { dataUsersAllProps } from '@/api/Data'

export function TableUsers({
  user,
  email,
  whatsapp,
  spec,
  cite,
  state,
  typeUser
}: dataUsersAllProps) {
  return (
    <>
      <tr>
        <td className=" p-7">{user}</td>
        <td className=" ">{email}</td>
        <td className=" ">{whatsapp}</td>
        <td className=" ">{spec}</td>
        <td className=" ">{cite}</td>
        <td className=" ">{state}</td>
        <td className=" ">{typeUser}</td>
      </tr>
    </>
  )
}
