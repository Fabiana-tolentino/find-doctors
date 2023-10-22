interface dataUsersAllProps {
  user: string
  email: string
  whatsapp: string
  spec: string
  city: string
  state: string
  typeUser: string
}
export function TableUsers({
  user,
  email,
  whatsapp,
  spec,
  city,
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
        <td className=" ">{city}</td>
        <td className=" ">{state}</td>
        <td className=" ">{typeUser}</td>
      </tr>
    </>
  )
}
