interface boxUserProps {
  user: string
  email: string
  contact: string
  typeUser: string
}

export function BoxUser({ user, email, contact, typeUser }: boxUserProps) {
  return (
    <>
      <tr>
        <td className=" p-4">{user}</td>
        <td className=" ">{email}</td>
        <td className=" ">{contact}</td>
        <td className=" ">{typeUser}</td>
      </tr>
    </>
  )
}
