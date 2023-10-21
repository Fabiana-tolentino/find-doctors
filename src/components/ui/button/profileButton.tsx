import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ProfileButtonProps {
  children: React.ReactNode
  url: string
}

export function ProfileButton({ children, url }: ProfileButtonProps) {
  return (
    <Link className="px-6 py-4 bg-gray-300 rounded-2xl text-start" to={url}>
      {children}
    </Link>
  )
}
